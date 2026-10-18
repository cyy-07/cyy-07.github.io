(() => {
    'use strict';
    const records = window.PORTFOLIO_PROJECTS || [];
    const root = document.getElementById('projects');
    const detail = document.getElementById('project-detail');
    let group = 'hackathons';
    const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const bilingual = value => `<span class="en">${esc(value.en)}</span><span class="zh">${esc(value.zh)}</span>`;
    const label = (en, zh) => bilingual({en, zh});
    const tags = record => `<div class="project-stack">${record.tags.map(tag => `<span class="stack-tag frontend">${esc(tag)}</span>`).join('')}</div>`;
    const linkButton = link => `<a class="cta-btn cta-secondary" href="${esc(link.url)}" target="_blank" rel="noopener">${bilingual(link.label)} <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
    const links = record => `<div class="project-cta">${record.links.map(linkButton).join('')}</div>`;
    const shortcuts = record => (record.quickLinks || []).map(index => linkButton(record.links[index])).join('');
    const figure = (src, caption, title) => `<figure class="project-detail-figure"><a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="${esc(title)}" loading="lazy" decoding="async"></a><figcaption>${bilingual(caption)}</figcaption></figure>`;

    function renderList(category) {
        document.getElementById('projects-panel-' + category).innerHTML = records.filter(record => record.group === category).map(record => `
            <article class="project-card project-summary" id="project-card-${esc(record.slug)}">
                <div class="project-card-body project-row">
                    <div class="project-copy">
                        <div class="project-event">${bilingual(record.event)}</div>
                        <h2 class="project-title">${esc(record.title)}</h2>
                        <div class="project-subtitle">${bilingual(record.subtitle)}</div>
                        <p class="project-desc">${bilingual(record.summary)}</p>
                        ${tags(record)}
                        <div class="project-actions">
                            <button class="cta-btn cta-primary project-open" type="button" data-open-project="${esc(record.slug)}">${label('Project details', '项目详情')} <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
                            ${shortcuts(record)}
                        </div>
                    </div>
                    <button class="project-preview" type="button" data-open-project="${esc(record.slug)}" aria-label="View ${esc(record.title)} project details">
                        <img src="${esc(record.image)}" alt="${esc(record.title)}" loading="lazy" decoding="async">
                        <span>${bilingual(record.caption)}</span>
                    </button>
                </div>
            </article>`).join('');
    }

    function setCategory(category) {
        group = category === 'coursework' ? 'coursework' : 'hackathons';
        document.querySelectorAll('[data-project-group]').forEach(button => {
            const selected = button.dataset.projectGroup === group;
            button.classList.toggle('active', selected);
            button.setAttribute('aria-selected', String(selected));
            button.tabIndex = selected ? 0 : -1;
        });
    }

    function showList(category, writeHistory = true, scroll = false) {
        setCategory(category);
        detail.hidden = true;
        ['hackathons', 'coursework'].forEach(name => {
            document.getElementById('projects-panel-' + name).hidden = name !== group;
        });
        if (writeHistory) history.pushState({portfolioGroup:group}, '', '#projects/' + group);
        if (scroll) document.querySelector('.project-tabs').scrollIntoView({block:'start'});
    }

    function showDetail(slug, writeHistory = true, scroll = true) {
        const record = records.find(item => item.slug === slug);
        if (!record) { showList(group, false); return; }
        setCategory(record.group);
        document.querySelectorAll('.project-list').forEach(panel => { panel.hidden = true; });
        detail.innerHTML = `<article class="card project-case-study" aria-labelledby="project-detail-title">
            <button class="project-back" type="button" data-project-back><i class="fas fa-arrow-left" aria-hidden="true"></i> ${label('Back to projects', '返回项目列表')}</button>
            <div class="project-event">${bilingual(record.event)}</div>
            <h2 id="project-detail-title" class="project-detail-title" tabindex="-1">${esc(record.title)}</h2>
            <p class="project-subtitle">${bilingual(record.subtitle)}</p>
            ${figure(record.image, record.figureCaption || record.caption, record.title)}
            <p class="project-detail-intro">${bilingual(record.summary)}</p>
            ${tags(record)}
            ${record.sections.map(section => `<section class="project-detail-section"><h3>${bilingual(section.title)}</h3><p>${bilingual(section.text)}</p></section>`).join('')}
            ${record.gallery.map(item => figure(item.image, item.caption, record.title + ' supporting figure')).join('')}
            <section class="project-detail-section"><h3>${label('Explore the complete project', '查看完整项目')}</h3>${links(record)}</section>
        </article>`;
        detail.hidden = false;
        if (writeHistory) history.pushState({portfolioGroup:group,portfolioProject:slug}, '', '#projects/' + group + '/' + slug);
        if (scroll) {
            detail.scrollIntoView({block:'start'});
            document.getElementById('project-detail-title').focus({preventScroll:true});
        }
    }

    function readRoute() {
        const parts = location.hash.slice(1).split('/');
        if (parts[0] !== 'projects') return;
        switchTab('projects');
        if (parts[2]) showDetail(parts[2], false);
        else showList(parts[1], false);
    }

    renderList('hackathons');
    renderList('coursework');
    root.addEventListener('click', event => {
        const opener = event.target.closest('[data-open-project]');
        if (opener) { showDetail(opener.dataset.openProject); return; }
        const category = event.target.closest('[data-project-group]');
        if (category) { showList(category.dataset.projectGroup); return; }
        if (event.target.closest('[data-project-back]')) {
            showList(group, false, true);
            history.replaceState({portfolioGroup:group}, '', '#projects/' + group);
            document.getElementById('projects-tab-' + group).focus({preventScroll:true});
        }
    });
    document.querySelectorAll('[data-project-group]').forEach(button => {
        button.addEventListener('keydown', event => {
            const order = [...document.querySelectorAll('[data-project-group]')];
            let next;
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - order.indexOf(button);
            else if (event.key === 'Home') next = 0;
            else if (event.key === 'End') next = 1;
            else return;
            event.preventDefault();
            showList(order[next].dataset.projectGroup);
            order[next].focus();
        });
    });
    document.getElementById('tab-projects').addEventListener('click', () => {
        if (!location.hash.startsWith('#projects/')) showList(group);
    });
    window.addEventListener('popstate', readRoute);
    window.addEventListener('hashchange', readRoute);
    readRoute();
})();
