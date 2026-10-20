window.PORTFOLIO_PROJECTS = [
  {
    "slug": "terrapulse",
    "group": "hackathons",
    "title": "TerraPulse",
    "event": {
      "en": "DesignVerse 2026 · Independent project",
      "zh": "DesignVerse 2026 · 独立项目"
    },
    "subtitle": {
      "en": "A visual starting point for visiting a new city",
      "zh": "初到陌生城市时的可视化旅行入口"
    },
    "summary": {
      "en": "I built TerraPulse for arriving in an unfamiliar city and deciding where to go. Visitors choose among 78 cities on a Three.js globe, then browse places to visit and local food. I developed the globe interactions and city pages as an independent DesignVerse project.",
      "zh": "我想为初到陌生城市、还不知道去哪玩的人做一个直观的旅行入口。TerraPulse 可以在 Three.js 地球上选择 78 个城市，再查看当地景点与美食。我在 DesignVerse 中独立完成了地球交互和城市页面。"
    },
    "cardSummary": {
      "en": "In a city I have never visited, a list of attractions tells me little about where to start. TerraPulse puts 78 destinations on a Three.js globe, then takes each marker into a city guide for landmarks, food, weather, and local stories. The globe is the way into the guide, not just a map beside it. The project won the Innovative Product Ideas award at DesignVerse 2026.",
      "zh": "到了从未去过的城市，光看景点名单很难决定从哪里开始。TerraPulse 把 78 个目的地放在 Three.js 地球上，点击标记即可进入城市指南，浏览地标、美食、天气和当地故事。地球本身就是进入指南的方式，而不只是旁边的一张地图。项目获得 DesignVerse 2026 Innovative Product Ideas 奖。"
    },
    "tags": [
      "JavaScript",
      "Three.js",
      "HTML / CSS",
      "Vercel"
    ],
    "image": "assets/projects/terrapulse.png",
    "caption": {
      "en": "City discovery on an interactive globe",
      "zh": "交互式地球上的城市探索"
    },
    "sections": [
      {
        "title": {
          "en": "Why I built TerraPulse",
          "zh": "为什么做 TerraPulse"
        },
        "text": {
          "en": "When I arrive in a new city, I want to get a sense of the place before deciding where to spend the day. A photograph can give me an idea of a neighborhood or landmark much faster than a long description. I built TerraPulse around that way of exploring. You start with a globe, choose a city, and look through its photographs and local information before planning a visit.",
          "zh": "到了一个新城市，我想先直观地看看这个地方，再决定一天去哪里。照片往往比一大段介绍更容易让我了解一个街区或景点。因此我把 TerraPulse 做成了一个可以从地球进入城市的应用，让用户先看照片和当地信息，再安排游览。"
        }
      },
      {
        "title": {
          "en": "Connecting the globe to the city pages",
          "zh": "把地球交互和城市页面接起来"
        },
        "text": {
          "en": "I used Three.js for the globe and React for the city interface. Raycasting identifies the selected city, and projected screen coordinates keep the opening panels attached to the right place as the view changes. I gave cities different color palettes according to their climate and cached destination photographs so the pages would not depend on every image request succeeding. I also connected a Gemini assistant to the interface. Its responses include city or section identifiers that the application can use to open the corresponding view.",
          "zh": "我用 Three.js 绘制地球，用 React 实现城市界面。射线检测用于识别选中的城市，再将空间坐标投影到屏幕上，使展开面板在视角变化时仍对应正确的位置。我根据气候设置城市配色，并缓存目的地照片，减少单次图片请求失败对页面的影响。我还将 Gemini 助手与界面连接，解析回答中的城市或栏目标识，打开相应视图。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Live application",
          "zh": "在线体验"
        },
        "url": "https://design-a-hack.vercel.app/Globe%20loader/terrapulse/TerraPulse"
      },
      {
        "label": {
          "en": "Presentation",
          "zh": "项目演示"
        },
        "url": "https://design-a-hack.vercel.app/Globe%20loader/terrapulse/presentation.html"
      },
      {
        "label": {
          "en": "GitHub",
          "zh": "GitHub"
        },
        "url": "https://github.com/cyy-07/design-a-hack"
      },
      {
        "label": {
          "en": "Devpost",
          "zh": "Devpost"
        },
        "url": "https://devpost.com/software/terrapulse-i593bl"
      }
    ],
    "gallery": [],
    "quickLinks": [
      0,
      1,
      2
    ],
    "figureCaption": {
      "en": "Figure 1. Globe navigation with selectable city markers. Each destination opens a city cover and sections for landmarks, food, weather, and community stories.",
      "zh": "图 1. 通过地球上的城市标记选择目的地，进入城市封面及地标、美食、天气和社区故事。"
    }
  },
  {
    "slug": "fluxmind",
    "group": "hackathons",
    "title": "FluxMind / Overload Radar",
    "event": {
      "en": "CitrusHack 2026 · Independent project",
      "zh": "CitrusHack 2026 · 独立项目"
    },
    "subtitle": {
      "en": "Deciding what can fit into an overloaded week",
      "zh": "决定忙碌的一周里哪些事情还能安排"
    },
    "summary": {
      "en": "I built FluxMind for students deciding what to give up when a week is already full. It compares three plans for the same workload and makes the proposed delays or cuts explicit. I developed the Next.js interface and connected it to Gemini through server APIs, with optional ElevenLabs voice support.",
      "zh": "我做 FluxMind，是想帮助学生在一周已经排满时决定放下哪些事情。应用会针对同一组任务比较三种计划，明确列出需要推迟或放弃的安排。我开发了 Next.js 界面，通过服务端 API 接入 Gemini，并加入可选的 ElevenLabs 语音支持。"
    },
    "cardSummary": {
      "en": "A deadline list says what is due, but not what to move when the week no longer fits. FluxMind turns the same workload into three alternative schedules and spells out which tasks stay, slip, or go. Gemini generates the plans behind a server API; students can compare projected stress alongside the tradeoffs, with optional voice support.",
      "zh": "截止日期清单能告诉人何时交作业，却不会告诉人一周排不下时该调整什么。FluxMind 根据同一组任务生成三种周计划，逐项列出哪些照常、推迟或取消。Gemini 通过服务端 API 生成方案，学生可以同时比较任务取舍和预估压力变化，也可选择语音交互。"
    },
    "tags": [
      "Next.js",
      "TypeScript",
      "Gemini",
      "ElevenLabs"
    ],
    "image": "assets/projects/fluxmind-plans.png",
    "caption": {
      "en": "Weekly plans and stress trajectories",
      "zh": "周计划与压力变化曲线"
    },
    "sections": [
      {
        "title": {
          "en": "Choosing what to give up",
          "zh": "忙不过来时，先决定放下什么"
        },
        "text": {
          "en": "A list of deadlines does not tell a student whether there is enough time to meet them. I wanted to make that decision easier before another commitment was added. In FluxMind, the student enters their workload and available hours, then compares three possible weeks. Each plan explains which tasks stay, which move, and which are dropped. The stress curves are estimates for comparing those choices.",
          "zh": "截止日期清单不能说明自己究竟有没有时间完成所有事情。我想让学生在答应下一件事之前，先看清现有安排的取舍。用户输入任务和可用时间后，可以比较三种不同的周计划。每个计划都会说明哪些任务继续、哪些推迟、哪些放弃，压力曲线用于比较这些选择的估计影响。"
        }
      },
      {
        "title": {
          "en": "Making the analysis usable in the interface",
          "zh": "把模型分析接到可以操作的界面上"
        },
        "text": {
          "en": "I built the input and plan comparison screens in Next.js and TypeScript. Gemini runs behind a server API, and I map its structured responses into risk scores and task decisions that the interface can display consistently. I added optional ElevenLabs audio for users who want to hear the advice. Saved example responses let the same demonstration work when an external API is unavailable.",
          "zh": "我用 Next.js 和 TypeScript 开发任务输入与计划比较页面。Gemini 通过服务端 API 调用，我将其结构化回答映射为风险分数和具体任务安排，使前端能按固定格式展示结果。用户也可以选择通过 ElevenLabs 听取建议。外部 API 不可用时，已保存的示例结果可用于完成同一套演示流程。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Live application",
          "zh": "打开应用"
        },
        "url": "https://overload-radar.vercel.app"
      },
      {
        "label": {
          "en": "GitHub",
          "zh": "GitHub"
        },
        "url": "https://github.com/cyy-07/overload-radar"
      },
      {
        "label": {
          "en": "Presentation source",
          "zh": "演示源码"
        },
        "url": "https://github.com/cyy-07/Fluxminddemo"
      },
      {
        "label": {
          "en": "Devpost",
          "zh": "Devpost"
        },
        "url": "https://devpost.com/software/fluxmind-a-cognitive-load-simulation-engine-for-students"
      }
    ],
    "gallery": [
      {
        "image": "assets/projects/fluxmind.png",
        "caption": {
          "en": "Figure 2. Workload entry for schedules, deadlines, and competing commitments used to generate alternative weekly plans.",
          "zh": "图 2. 课程、截止日期及冲突安排的输入界面，用于生成不同的周计划。"
        }
      }
    ],
    "quickLinks": [
      0,
      1
    ],
    "figureCaption": {
      "en": "Figure 1. Comparison of three weekly plans with projected stress trajectories and task tradeoffs. Users can compare the alternatives before accepting another commitment.",
      "zh": "图 1. 三种周计划的压力变化与任务取舍比较，帮助用户在接受新安排前判断不同选择。"
    }
  },
  {
    "slug": "ecolung",
    "group": "hackathons",
    "title": "EcoLung",
    "event": {
      "en": "BearHacks · Independent project",
      "zh": "BearHacks · 独立项目"
    },
    "subtitle": {
      "en": "Seeing how everyday habits affect exposure",
      "zh": "看清日常习惯对环境暴露的影响"
    },
    "summary": {
      "en": "I built EcoLung to help people compare the exposure associated with their daily routines. After choosing a location, a visitor can change outdoor time or protective habits and compare the estimates in a 3D lung scene. I independently developed the React and Three.js frontend and connected a FastAPI backend to OpenAQ measurements.",
      "zh": "我做 EcoLung，是想让人们更直观地比较日常习惯对应的环境暴露。选择地点后，用户可以调整户外时间或防护习惯，在三维肺部场景中比较估计结果。我独立开发了 React 和 Three.js 前端，并通过 FastAPI 后端接入 OpenAQ 测量数据。"
    },
    "cardSummary": {
      "en": "A citywide air-quality reading does not say how a particular routine changes exposure. EcoLung connects nearby OpenAQ observations to a 3D lung view, where visitors can compare locations, time outdoors, and protective habits side by side. I built the React and Three.js interface and the FastAPI service; the projections are presented as an educational simulation.",
      "zh": "全市空气质量读数并不能说明某种生活习惯会怎样改变个人暴露。EcoLung 将附近的 OpenAQ 观测接入三维肺部视图，用户可以并排比较不同地点、户外时长和防护习惯。我开发了 React 与 Three.js 界面及 FastAPI 服务，投影结果用于科普模拟。"
    },
    "tags": [
      "React",
      "Three.js",
      "FastAPI",
      "Python",
      "OpenAQ"
    ],
    "image": "assets/projects/ecolung-scene.png",
    "caption": {
      "en": "3D lung response to exposure scenarios",
      "zh": "暴露情景下的三维肺部变化"
    },
    "sections": [
      {
        "title": {
          "en": "Making an air-quality reading easier to interpret",
          "zh": "让空气质量数字更容易理解"
        },
        "text": {
          "en": "An air-quality reading tells you about the air at a particular place and time. I wanted to help a visitor think about what repeated exposure could mean for their own routine. I used a lung scene to illustrate the estimates and put the current and proposed routines side by side. That makes it possible to compare changes such as spending less time outdoors or using a mask without losing track of the original scenario.",
          "zh": "空气质量读数对应的是某个地点、某个时刻的空气状况。我希望用户能进一步考虑，持续暴露与自己的生活习惯有什么关系。因此我用肺部场景表达估计结果，并将当前习惯和调整后的习惯并排显示。这样可以比较减少户外时间、使用口罩等选择，同时看到原始情景作为参照。"
        }
      },
      {
        "title": {
          "en": "From local observations to the 3D comparison",
          "zh": "把当地观测数据接入三维比较"
        },
        "text": {
          "en": "I wrote the FastAPI service that retrieves nearby OpenAQ observations and calculates the exposure scenarios. On the frontend, React handles the location and routine controls, while Three.js draws the lung scene for the selected year. The calculations are an educational illustration of exposure. I included sample data so visitors can still explore the controls when a live observation is unavailable.",
          "zh": "我编写了 FastAPI 服务，读取附近的 OpenAQ 观测并计算暴露情景。前端由 React 处理地点和习惯设置，Three.js 绘制所选年份对应的肺部场景。计算结果用于环境暴露的科普说明。我也准备了示例数据，使实时观测不可用时仍能体验这些设置和比较。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Live application",
          "zh": "打开应用"
        },
        "url": "https://ucr-bearhack-ecolung.vercel.app/"
      },
      {
        "label": {
          "en": "GitHub",
          "zh": "GitHub"
        },
        "url": "https://github.com/cyy-07/UCR-Bearhack-Ecolung"
      }
    ],
    "gallery": [
      {
        "image": "assets/projects/ecolung.png",
        "caption": {
          "en": "Figure 2. Location and routine controls for comparing outdoor time, mask use, and filtration with nearby air-quality observations.",
          "zh": "图 2. 地点与日常习惯的控制界面，将附近空气质量观测与户外时间、口罩使用及空气过滤情景结合。"
        }
      }
    ],
    "quickLinks": [
      0,
      1
    ],
    "figureCaption": {
      "en": "Figure 1. Three-dimensional lung scene for comparing environmental exposure under selected routines and projection years. The scene is part of an educational simulation.",
      "zh": "图 1. 比较不同日常习惯与预测年份下环境暴露的三维肺部场景，用于科普模拟。"
    }
  },
  {
    "slug": "voidtalk",
    "group": "hackathons",
    "title": "VoidTalk / Sona",
    "event": {
      "en": "RoseHack 2026 · Team project",
      "zh": "RoseHack 2026 · 团队项目"
    },
    "subtitle": {
      "en": "Letting the author say what kind of reply they want",
      "zh": "让发帖人先说清楚自己需要怎样的回复"
    },
    "summary": {
      "en": "Sona is an anonymous discussion app where authors choose the kind of response they want. In our three-person RoseHack team, I built the posting and reply views in Next.js and connected them to Supabase. I also wrote prompts for the posting modes and a Flask moderation prototype that assigns replies to three visibility levels.",
      "zh": "Sona 是一个允许发帖人选择回复类型的匿名讨论应用。我在三人 RoseHack 团队中开发了 Next.js 发帖与回复页面，并将前端连接到 Supabase。我还编写了对应不同发帖模式的提示词，以及将回复划分为三个可见等级的 Flask 审核原型。"
    },
    "cardSummary": {
      "en": "Advice can miss the mark when someone came to be heard, not to be fixed. Sona lets authors choose advice, empathy, opposition, or journal mode, then uses that intent in a Flask prototype that assigns replies to three visibility levels. I built the Next.js posting and reply flow, connected it to Supabase, and wrote the prompts for each mode.",
      "zh": "有人发帖是想被倾听，不是来寻求解决方案；这时建议反而可能答非所问。Sona 让作者选择建议、共情、反对意见或日记模式，并在 Flask 原型中据此将回复分为三个可见等级。我开发了 Next.js 发帖与回复流程，将其接入 Supabase，并编写各模式的提示词。"
    },
    "tags": [
      "Next.js",
      "Supabase",
      "Flask",
      "Prompt Engineering"
    ],
    "image": "assets/projects/voidtalk.png",
    "caption": {
      "en": "Intent-driven discussion and reply visibility",
      "zh": "围绕发帖意图组织讨论与回复"
    },
    "sections": [
      {
        "title": {
          "en": "Why the posting mode matters",
          "zh": "为什么先让用户选择发帖意图"
        },
        "text": {
          "en": "Someone asking for practical advice may be frustrated by a reply that only offers sympathy. Someone who wants to be heard may not want a list of solutions. That was the starting point for Sona. We let authors choose advice, empathy, opposition, or journal mode when they post. I proposed using that choice when evaluating replies, so that a response is judged in the context of what the author asked for.",
          "zh": "想要实际建议的人，可能不会满足于一句安慰；只想倾诉的人，也未必希望收到一份解决方案。这是 Sona 的出发点。我们让用户在发帖时选择建议、共情、反对意见或日记模式。我提出在评估回复时使用这个选择，让回复是否合适与发帖人的具体需求对应起来。"
        }
      },
      {
        "title": {
          "en": "My work across the frontend and backend",
          "zh": "我在前后端之间完成的工作"
        },
        "text": {
          "en": "I developed the posting and reply screens in Next.js and connected the views to Supabase for storing and retrieving discussion data. I also worked on the boundary between the interface and moderation service. My Flask prototype accepts the reply together with the original post and selected mode, then returns a visibility category and a reason. I wrote different prompts for the four modes and mapped the results to featured, more, or hidden replies. The team submitted the app as Sona. The repository and presentation use the earlier name VoidTalk.",
          "zh": "我用 Next.js 开发发帖和回复页面，并将这些视图连接到 Supabase，完成讨论数据的存取。我也负责界面与审核服务之间的连接。编写的 Flask 原型接收回复、原帖内容和所选模式，再返回可见等级及原因。我为四种模式分别编写提示词，将结果对应到精选、更多或折叠回复。团队提交时使用 Sona 这个名字，仓库和演示材料沿用了早期名称 VoidTalk。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "GitHub",
          "zh": "GitHub"
        },
        "url": "https://github.com/cyy-07/rosehack"
      },
      {
        "label": {
          "en": "Original presentation",
          "zh": "原项目演示"
        },
        "url": "https://github.com/cyy-07/rosehack/blob/main/rosehack/presentation-demo.pdf"
      },
      {
        "label": {
          "en": "Devpost submission",
          "zh": "Devpost 项目页"
        },
        "url": "https://devpost.com/software/sona-j84von"
      }
    ],
    "gallery": [],
    "quickLinks": [
      0,
      2
    ],
    "figureCaption": {
      "en": "Figure 1. Intent-driven feedback in VoidTalk. The selected posting mode determines how replies are evaluated and organized into visibility tiers.",
      "zh": "图 1. VoidTalk 中围绕发帖意图组织的反馈机制。系统根据所选模式评估回复，并按可见等级组织内容。"
    }
  },
  {
    "slug": "energy",
    "group": "coursework",
    "title": "TC-SS-DPMixer for Energy Forecasting",
    "event": {
      "en": "UCR CS228 · Independent course project",
      "zh": "UCR CS228 · 独立课程项目"
    },
    "subtitle": {
      "en": "A small forecasting model for daily demand and usage spikes",
      "zh": "同时预测日常负载和用电尖峰的小型模型"
    },
    "summary": {
      "en": "I designed TC-SS-DPMixer to forecast household appliance use with a compact model. It combines time dependent branch weights with separate predictions for smooth demand and usage spikes. On the four-hour UCI Appliances task, it achieved 34.83 Wh MAE with 68K parameters, compared with 34.19 Wh and 412K parameters for iTransformer.",
      "zh": "我设计 TC-SS-DPMixer，是想用紧凑模型预测家庭电器能耗。模型结合随时间变化的分支权重，分别预测平稳负载与用电尖峰。在 UCI Appliances 四小时预测任务上，模型以 6.8 万参数取得 34.83 Wh MAE；iTransformer 对应为 41.2 万参数和 34.19 Wh。"
    },
    "cardSummary": {
      "en": "Household demand combines a smooth baseline with brief appliance spikes, two patterns a short-term forecast must handle together. TC-SS-DPMixer uses four time-weighted branches and separate predictions for baseline demand and spikes. On the four-hour UCI Appliances task, its 68K parameters reached 34.83 Wh MAE, within 0.64 Wh of iTransformer with 412K parameters.",
      "zh": "家庭用电既有平稳的基础负载，也有电器开启时的短暂尖峰，短期预测需要同时处理这两种变化。TC-SS-DPMixer 使用四个随时间加权的分支，分别预测基础负载与尖峰。在 UCI Appliances 四小时任务上，它以 6.8 万参数取得 34.83 Wh MAE，与使用 41.2 万参数的 iTransformer 相差 0.64 Wh。"
    },
    "tags": [
      "PyTorch",
      "Time Series",
      "Transformers",
      "Self-supervised Learning"
    ],
    "image": "assets/projects/energy.png",
    "caption": {
      "en": "Time-conditioned mixer architecture",
      "zh": "时间条件 mixer 架构"
    },
    "sections": [
      {
        "title": {
          "en": "A compact model for uneven demand",
          "zh": "用紧凑模型处理不均匀的用电需求"
        },
        "text": {
          "en": "Household energy use has recurring daily patterns as well as short bursts when appliances are switched on. I wanted a small forecasting model that could account for both. For CS228, I developed TC-SS-DPMixer around separate smooth-load and spike predictions, with branch weights that depend on the time being forecast. I compared it with linear, recurrent, mixer, and Transformer models on the same household sensor dataset.",
          "zh": "家庭用电既有重复出现的日常规律，也有电器开启时的短暂尖峰。我希望用一个小型预测模型同时处理这两类变化。在 CS228 项目中，我设计了分别预测平稳负载与尖峰的 TC-SS-DPMixer，并根据预测时刻计算分支权重，再与线性、循环网络、mixer 和 Transformer 模型在同一传感器数据上比较。"
        }
      },
      {
        "title": {
          "en": "Time dependent weights and separate spike predictions",
          "zh": "随时间变化的权重与独立尖峰预测"
        },
        "text": {
          "en": "I used a small MLP to compute branch weights from the forecast step's time features. The weights can be plotted over a day to inspect how the model combines its branches at different hours. For the spike path, I combined a classifier for whether a spike occurs with a regressor for its magnitude. A separate head predicts smooth base demand. I implemented component ablations to examine what each part contributes and compared models under controlled losses and input features.",
          "zh": "我用小型 MLP 根据各预测时刻的时间特征计算分支权重，再按一天中的时刻绘制权重，检查模型如何组合不同分支。尖峰路径由是否出现尖峰的分类器和幅度回归器组成，另一个预测头处理平稳基础负载。我实现了组件消融，并在控制损失函数和输入特征的条件下比较各部分的作用。"
        }
      },
      {
        "title": {
          "en": "Evaluation on household sensor data",
          "zh": "在家庭传感器数据上的评估"
        },
        "text": {
          "en": "The four-hour task uses sixteen hours of history, with training, validation, and test records separated chronologically. TC-SS-DPMixer reached 34.83 Wh MAE with about 68K parameters. iTransformer reached 34.19 Wh with about 412K. I also tested masked-patch pretraining for PatchTST. With 20% of labels, MAE fell from 63.9 to 54.1 Wh. A separate hourly task predicts the next week from the previous week. I built an interactive report and dataset explorer so readers can inspect the experiments and sensor series themselves.",
          "zh": "四小时任务使用过去十六小时的记录，并按时间顺序划分训练、验证与测试数据。TC-SS-DPMixer 约有 6.8 万参数，MAE 为 34.83 Wh；iTransformer 约有 41.2 万参数，MAE 为 34.19 Wh。我还测试了 PatchTST 的掩码片段预训练，仅使用 20% 标签时，MAE 从 63.9 降到 54.1 Wh。另一个任务按小时聚合数据，以过去一周预测下一周。我制作了交互报告和数据浏览器，便于读者直接查看实验与传感器序列。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Full interactive report",
          "zh": "完整交互式作业报告"
        },
        "url": "reports/energy/index.html"
      },
      {
        "label": {
          "en": "Dataset explorer",
          "zh": "交互式数据集介绍"
        },
        "url": "reports/energy/dataset.html"
      },
      {
        "label": {
          "en": "GitHub and experiments",
          "zh": "GitHub 与实验代码"
        },
        "url": "https://github.com/cyy-07/UCR-CS228-Project"
      }
    ],
    "gallery": [],
    "quickLinks": [
      0,
      1
    ],
    "figureCaption": {
      "en": "Figure 1. TC-DPMixer architecture from my CS228 report. Time features determine the weights of four forecasting branches. TC-SS-DPMixer uses separate predictions for smooth demand and usage spikes.",
      "zh": "图 1. CS228 报告中的 TC-DPMixer 架构。时间特征决定四个预测分支的权重，TC-SS-DPMixer 则分别预测平稳负载与用电尖峰。"
    }
  },
  {
    "slug": "features",
    "group": "coursework",
    "title": "Feature Selection with Nearest Neighbor",
    "event": {
      "en": "UCR CS170 · Independent course project",
      "zh": "UCR CS170 · 独立课程项目"
    },
    "subtitle": {
      "en": "Finding which inputs help a nearest neighbor classifier",
      "zh": "找出真正有助于近邻分类的输入特征"
    },
    "summary": {
      "en": "I built a feature-search program to test how much a nearest neighbor classifier benefits from a smaller input set. On the 3,000-row assignment dataset, forward selection found two of 64 features with 97.3% validation accuracy, compared with 68.0% using all features. I implemented both forward selection and backward elimination with leave-one-out evaluation.",
      "zh": "我编写了特征搜索程序，研究减少输入特征能否改善近邻分类。在包含 3,000 条记录的作业数据上，前向选择从 64 个特征中选出两个，验证准确率为 97.3%，使用全部特征时为 68.0%。我实现了前向选择和后向消除，并用留一验证评估候选子集。"
    },
    "cardSummary": {
      "en": "For nearest-neighbor classification, irrelevant inputs can distort the distances that determine each prediction. On a 3,000-row assignment dataset, forward selection chose two of 64 features and reached 97.3% validation accuracy, compared with 68.0% using all features. I implemented forward selection and backward elimination and evaluated candidate subsets with leave-one-out accuracy.",
      "zh": "近邻分类依赖样本间的距离，不相关的输入特征也可能改变每次预测的结果。在 3,000 条作业数据上，前向选择从 64 个特征中选出两个，验证准确率达到 97.3%；使用全部特征时为 68.0%。我实现了前向选择与后向消除，并用留一准确率评估候选子集。"
    },
    "tags": [
      "Python",
      "NumPy",
      "Greedy Search",
      "1-NN",
      "Cross-validation"
    ],
    "image": "assets/projects/features.png",
    "caption": {
      "en": "Forward-selection validation accuracy",
      "zh": "前向特征选择的验证准确率"
    },
    "sections": [
      {
        "title": {
          "en": "Finding a useful subset",
          "zh": "寻找有用的特征子集"
        },
        "text": {
          "en": "Nearest neighbor classification depends on distances between examples, so the choice of input features matters. I wanted to test whether searching for a smaller subset could improve classification. I implemented forward selection starting from an empty set and backward elimination starting from all features. At each step, I evaluate the candidate subsets with leave-one-out 1-NN accuracy and record the best subset found across the search.",
          "zh": "近邻分类取决于样本之间的距离，因此输入哪些特征会影响结果。我想检验搜索更小的特征子集能否改善分类。我分别实现了从空集出发的前向选择和从完整集合出发的后向消除，每一步都用留一 1 近邻准确率评估候选子集，并记录搜索中找到的最佳组合。"
        }
      },
      {
        "title": {
          "en": "What the selected features changed",
          "zh": "选出的特征带来了什么变化"
        },
        "text": {
          "en": "On the 500-row dataset, both methods selected features 2 and 12 with 96.6% validation accuracy. On the 3,000-row dataset, forward selection chose features 37 and 58 and reached 97.3%, compared with 68.0% using all 64 features. Backward elimination selected feature 58 alone with 85.1%. I plotted the selected feature pairs to see how the two classes were distributed in those spaces.",
          "zh": "在 500 条记录的数据集上，两种方法都选出特征 2 和 12，验证准确率为 96.6%。在 3,000 条记录的数据集上，前向选择选出特征 37 和 58，准确率为 97.3%，使用全部 64 个特征时为 68.0%。后向消除仅选出特征 58，准确率为 85.1%。我绘制了所选特征对的散点图，检查两个类别在这些空间中的分布。"
        }
      },
      {
        "title": {
          "en": "Distance calculation and search records",
          "zh": "距离计算与搜索记录"
        },
        "text": {
          "en": "I used NumPy array operations for the distance calculations and saved the accuracy trace at every search level. The report compares running time as well as the selected subsets, and includes the feature-space plots and a banknote-authentication extension. The linked source and logs show how the reported subsets were obtained.",
          "zh": "我使用 NumPy 数组运算计算距离，并保存每一层搜索的准确率记录。报告比较了运行时间和最终选出的子集，也包含特征空间图及钞票鉴别数据扩展。下方源代码和日志记录了这些特征组合的具体搜索过程。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Full report PDF",
          "zh": "完整作业 PDF"
        },
        "url": "reports/features/report.pdf"
      },
      {
        "label": {
          "en": "GitHub, data and traces",
          "zh": "GitHub、数据与搜索日志"
        },
        "url": "https://github.com/cyy-07/UCR-CS170-Project2_ML"
      }
    ],
    "gallery": [
      {
        "image": "assets/projects/features-scatter.png",
        "caption": {
          "en": "Figure 2. Class distribution in the space of selected features 37 and 58 from the CS170 report.",
          "zh": "图 2. CS170 报告中所选特征 37 与 58 构成的特征空间及类别分布。"
        }
      }
    ],
    "quickLinks": [
      0,
      1
    ],
    "figureCaption": {
      "en": "Figure 1. Validation accuracy along forward feature selection on the large assignment dataset, reproduced from my CS170 report.",
      "zh": "图 1. 大规模作业数据上前向特征选择各阶段的验证准确率，取自我的 CS170 报告。"
    }
  },
  {
    "slug": "puzzle",
    "group": "coursework",
    "title": "8-Puzzle Search",
    "event": {
      "en": "UCR CS170 · Independent course project",
      "zh": "UCR CS170 · 独立课程项目"
    },
    "subtitle": {
      "en": "How a heuristic changes the amount of search",
      "zh": "启发式信息如何改变搜索量"
    },
    "summary": {
      "en": "I implemented three ways to solve the 8-puzzle and compared how many states each explores. In the depth 24 assignment case, A* with Manhattan distance expanded 1,869 nodes, compared with 234,994 for uniform-cost search. All three methods use the same search routine, with counters for expanded nodes and maximum queue size.",
      "zh": "我实现了三种八数码求解方法，并比较各自需要探索多少状态。在解深度为 24 的作业测试中，曼哈顿距离 A* 扩展了 1,869 个节点，统一代价搜索为 234,994 个。三种方法使用同一搜索流程，并记录扩展节点数与最大队列规模。"
    },
    "cardSummary": {
      "en": "My grandmother taught me Klotski, and I wondered how a solver could reach a solution without retracing so many moves. In CS170, I used the 8-puzzle to compare uniform-cost search with A* using misplaced-tile and Manhattan heuristics. At solution depth 24, Manhattan A* expanded 1,869 nodes; uniform-cost search expanded 234,994 on the same board.",
      "zh": "祖母教我玩华容道时，我就好奇求解程序怎样才能少走重复的步骤。在 CS170 项目中，我用八数码比较统一代价搜索，以及采用错位数和曼哈顿距离启发式的 A*。在同一块解深度为 24 的棋盘上，曼哈顿距离 A* 扩展 1,869 个节点，统一代价搜索则扩展 234,994 个。"
    },
    "tags": [
      "Python",
      "A*",
      "Uniform-cost Search",
      "Heuristics"
    ],
    "image": "assets/projects/puzzle-expansion.jpg",
    "caption": {
      "en": "Search expansions across solution depths",
      "zh": "不同解深度下的搜索扩展节点数"
    },
    "sections": [
      {
        "title": {
          "en": "From Klotski to the 8-puzzle",
          "zh": "从小时候的华容道到八数码"
        },
        "text": {
          "en": "My grandmother taught me to play Klotski when I was young, and I used to wonder how to solve it without repeating moves. For CS170, I used the smaller 8-puzzle to compare search strategies. I implemented uniform-cost search and A* with misplaced-tile and Manhattan-distance heuristics. Keeping the state representation and search loop the same let me compare the effect of the heuristic directly.",
          "zh": "小时候祖母教我玩华容道，我曾想过能否不反复移动就找到解。在 CS170 项目中，我用规模更小的八数码比较搜索策略，实现了统一代价搜索，以及采用错位数和曼哈顿距离启发式的 A*。三种方法使用相同的状态表示与搜索循环，以便直接比较启发式信息的作用。"
        }
      },
      {
        "title": {
          "en": "Comparing the search effort",
          "zh": "比较找到解所需的搜索量"
        },
        "text": {
          "en": "I tested assignment boards with solution depths from 0 to 24 and recorded expanded nodes, maximum queue size, and execution time. At depth 24, Manhattan-distance A* expanded 1,869 nodes and uniform-cost search expanded 234,994. The program also accepts a custom board and prints the state selected at each step with its path cost and heuristic estimate. The report contains the comparisons, while the repository identifies the graded submission separately from later personal changes.",
          "zh": "我测试了解深度从 0 到 24 的作业棋盘，记录扩展节点数、最大队列规模和运行时间。在深度 24 的测试中，曼哈顿距离 A* 扩展 1,869 个节点，统一代价搜索扩展 234,994 个。程序也接受自定义棋盘，并输出每一步选中的状态、路径代价和启发式估计。报告包含完整比较，仓库则区分了评分版本与后来的个人改动。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Source code and graded version",
          "zh": "源代码与评分版本"
        },
        "url": "https://github.com/cyy-07/UCR-CS170Project1_8puzzle"
      },
      {
        "label": {
          "en": "Full report PDF",
          "zh": "完整作业 PDF"
        },
        "url": "reports/puzzle/report.pdf"
      }
    ],
    "gallery": [],
    "quickLinks": [
      1,
      0
    ],
    "figureCaption": {
      "en": "Figure 1. Expanded nodes versus solution depth for uniform-cost search and A* with misplaced-tile or Manhattan-distance heuristics. The vertical axis is logarithmic. This is Figure 6 from my CS170 report.",
      "zh": "图 1. 统一代价搜索、错位数 A* 与曼哈顿距离 A* 在不同解深度下的扩展节点数，纵轴采用对数刻度。取自我的 CS170 报告图 6。"
    }
  },
  {
    "slug": "flight",
    "group": "coursework",
    "title": "Flight Compare",
    "event": {
      "en": "UCR CS009C · Independent course project",
      "zh": "UCR CS009C · 独立课程项目"
    },
    "subtitle": {
      "en": "Comparing ticket prices after the extra fees",
      "zh": "把附加费算进去之后再比较票价"
    },
    "summary": {
      "en": "While booking a trip for winter break, I noticed that an offer with a low base fare could become more expensive after extra fees. I built Flight Compare to put baggage, insurance, and service charges into the comparison. The C++ program filters simulated flight offers and calculates totals for Economy and First Class.",
      "zh": "订寒假旅行机票时，我注意到一些起步票价较低的报价，加上额外费用后反而更贵。因此我做了 Flight Compare，把行李、保险和服务费纳入比较。这个 C++ 程序可以筛选模拟航班报价，并计算经济舱和头等舱的总价。"
    },
    "cardSummary": {
      "en": "A low fare can stop looking like a bargain once baggage, insurance, and service fees are added. I built Flight Compare after running into that problem while booking a winter-break trip. Its C++ program ranks simulated Economy and First Class offers by total cost, with separate fare rules for each cabin.",
      "zh": "加上行李、保险和服务费后，低票价未必还是划算的选择。寒假订票时遇到这个问题后，我做了 Flight Compare。它用 C++ 按总价排列模拟的经济舱与头等舱报价，并为两种舱位分别实现计价规则。"
    },
    "tags": [
      "C++",
      "OOP",
      "Polymorphism",
      "STL",
      "CSV"
    ],
    "image": "assets/projects/flight.svg",
    "caption": {
      "en": "Class relationships based on the submitted C++ source",
      "zh": "根据提交的 C++ 源码绘制的类关系"
    },
    "sections": [
      {
        "title": {
          "en": "The price that prompted the project",
          "zh": "从订票时遇到的价格问题开始"
        },
        "text": {
          "en": "When I compared tickets for a trip during winter break, some third-party offers looked cheaper until baggage or other charges were added. I wanted to compare the amount I would actually pay before choosing a provider. That became the idea for my CS009C project. I built a command-line program that lets a user select a route and departure period, inspect the fee breakdown, and add a flight to a cart.",
          "zh": "比较寒假机票时，一些第三方报价起初更低，加上行李等费用之后却未必划算。我希望在选择购票渠道之前，就能比较自己最终需要付多少钱。这成了 CS009C 项目的起点。我编写了命令行程序，让用户选择航线和出发时段、查看费用明细，再将航班加入购物车。"
        }
      },
      {
        "title": {
          "en": "How I represented fares in C++",
          "zh": "用 C++ 表达不同舱位的计价规则"
        },
        "text": {
          "en": "I stored route, schedule, and fee information in FlightOrder and put the fare calculations behind a common FareType interface. EconomyClass and FirstClass implement their own pricing rules through inheritance and virtual functions. UserAccount handles the account interaction. I used CSV records to test route filtering and price comparisons, so the example offers are simulated. The proposal explains the class design, and the repository contains the submitted implementation.",
          "zh": "我将航线、时刻和费用信息保存在 FlightOrder 中，通过统一的 FareType 接口调用舱位计价规则。EconomyClass 和 FirstClass 使用继承与虚函数分别实现价格计算，UserAccount 处理账户交互。我用 CSV 记录测试航线筛选与价格比较，因此页面材料中的示例报价来自模拟数据。提案说明类设计，仓库包含最终提交的实现。"
        }
      }
    ],
    "links": [
      {
        "label": {
          "en": "Design proposal PDF",
          "zh": "设计提案 PDF"
        },
        "url": "reports/flight/proposal.pdf"
      },
      {
        "label": {
          "en": "GitHub and source",
          "zh": "GitHub 与源代码"
        },
        "url": "https://github.com/cyy-07/Flight-Online-Comparing-Platform"
      }
    ],
    "gallery": [],
    "quickLinks": [
      0,
      1
    ],
    "figureCaption": {
      "en": "Figure 1. Class relationships drawn from the submitted C++ code. UserAccount works with FlightOrder. EconomyClass and FirstClass implement the FareType pricing interface.",
      "zh": "图 1. 根据提交的 C++ 代码绘制的类关系。UserAccount 与 FlightOrder 连接，EconomyClass 和 FirstClass 实现 FareType 定价接口。"
    }
  }
];
