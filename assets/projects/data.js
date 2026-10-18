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
      "en": "A living globe for travel and community discovery",
      "zh": "以三维地球探索城市与社区"
    },
    "summary": {
      "en": "I built a Three.js travel globe with 78 selectable cities. Visitors open city covers, explore landmarks and food, and browse weather and community stories. I designed the globe-to-city transitions and an image pipeline with cached destination photos and climate-specific fallbacks.",
      "zh": "我独立开发了包含 78 个可选城市的 Three.js 旅行地球。用户从城市封面进入地标、美食、天气和社区故事。我完成了地球与城市视图的切换设计，并加入目的地图片缓存及与气候对应的缺图替代方案。"
    },
    "tags": [
      "JavaScript",
      "Three.js",
      "HTML / CSS",
      "Vercel"
    ],
    "image": "assets/projects/terrapulse.png",
    "caption": {
      "en": "Live application screenshot",
      "zh": "实际应用截图"
    },
    "sections": [
      {
        "title": {
          "en": "From globe to city",
          "zh": "从地球进入城市"
        },
        "text": {
          "en": "The globe is the navigation surface. City markers lead to magazine-style covers, followed by focused sections for landmarks, trending places, food, weather, and community posts. Landmark photographs open as postcards rather than separate map pins.",
          "zh": "地球本身承担导航功能。城市标记连接杂志式封面，再进入地标、热门地点、美食、天气和社区内容。地标照片可以展开为明信片，而不只是地图上的独立标记。"
        }
      },
      {
        "title": {
          "en": "Implementation",
          "zh": "实现方式"
        },
        "text": {
          "en": "I developed the city cards, landmark views, and climate-dependent color schemes. A destination-image pipeline caches photographs and substitutes climate-specific placeholders when an image is missing. The project also includes an interactive presentation of the experience.",
          "zh": "我开发了城市卡片、地标视图和随气候变化的配色。目的地图片流程会缓存照片，并在缺图时使用对应气候的替代图。项目另有介绍交互体验的演示页面。"
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
    "gallery": []
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
      "en": "Compare a week before committing to it",
      "zh": "在作出安排前比较不同的一周"
    },
    "summary": {
      "en": "I built a student workload planner that turns deadlines, available time, and competing commitments into three alternative plans. The interface compares stress trajectories and explains what to keep, delay, or drop. A structured analysis API connects the Next.js interface to Gemini, with optional ElevenLabs voice support.",
      "zh": "我独立开发了学生任务规划应用，将截止日期、可用时间和相互冲突的安排转化为三种计划。界面比较压力变化，并说明哪些任务应继续、推迟或放弃。Next.js 界面通过结构化分析 API 连接 Gemini，并提供可选的 ElevenLabs 语音支持。"
    },
    "tags": [
      "Next.js",
      "TypeScript",
      "Gemini",
      "ElevenLabs"
    ],
    "image": "assets/projects/fluxmind-plans.png",
    "caption": {
      "en": "Plan comparison in the live application",
      "zh": "实际应用中的计划比较"
    },
    "sections": [
      {
        "title": {
          "en": "Workload and alternatives",
          "zh": "任务输入与计划比较"
        },
        "text": {
          "en": "Users enter course schedules, assignments, exams, work commitments, and life events. The output combines a risk summary with three plans and explicit tradeoffs. The weekly view makes conflicts visible before an additional commitment is accepted.",
          "zh": "用户可以输入课程、作业、考试、工作和生活安排。输出包含风险概述、三种计划及具体取舍。周视图用于在接受新安排之前发现冲突。"
        }
      },
      {
        "title": {
          "en": "API integration and continuity",
          "zh": "API 集成与演示流程"
        },
        "text": {
          "en": "I mapped structured analysis responses into risk scores, plan breakdowns, and comparison screens. Local example results keep the demonstration usable when Gemini or ElevenLabs is unavailable. A separate interactive presentation explains the simulation and decision flow.",
          "zh": "我将结构化分析结果映射为风险分数、计划明细和比较界面。Gemini 或 ElevenLabs 不可用时，可通过本地示例结果继续演示。项目另有交互式演示介绍模拟与决策流程。"
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
          "en": "Workload and weekly planner inputs",
          "zh": "任务与周计划输入界面"
        }
      }
    ]
  },
  {
    "slug": "ecolung",
    "group": "hackathons",
    "title": "EcoLung",
    "event": {
      "en": "BearHacks · UC Riverside",
      "zh": "BearHacks · 加州大学河滨分校"
    },
    "subtitle": {
      "en": "Explore environmental exposure through two daily routines",
      "zh": "通过两种日常习惯探索环境暴露"
    },
    "summary": {
      "en": "I connected OpenAQ air-quality measurements to a FastAPI service and a React/Three.js interface. Users choose a location, compare current and improved routines, and inspect their simulated effects in a 3D lung scene. The project combines external data, scenario controls, and a visual explanation of cumulative exposure.",
      "zh": "我将 OpenAQ 空气质量测量数据连接到 FastAPI 服务和 React/Three.js 界面。用户选择地点后，可以对比当前与改善后的日常习惯，并在三维肺部场景中观察模拟差异。项目将外部数据、情景控制和累积暴露的可视化解释结合起来。"
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
      "en": "3D lung view from the live application",
      "zh": "实际应用中的三维肺部视图"
    },
    "sections": [
      {
        "title": {
          "en": "Location and routine comparison",
          "zh": "地点与习惯比较"
        },
        "text": {
          "en": "The interface accepts a region or custom coordinates and compares scenarios such as different outdoor hours, mask use, and air filtration. The lung scene changes with the selected routine and projection year. The display is an educational exposure simulation.",
          "zh": "界面支持地区或自定义坐标，并比较户外时间、口罩和空气过滤等情景。肺部场景随所选习惯和预测年份变化，用于环境暴露的科普模拟。"
        }
      },
      {
        "title": {
          "en": "Data and visualization",
          "zh": "数据与可视化"
        },
        "text": {
          "en": "The backend retrieves nearby OpenAQ observations and passes scenario results to the frontend. Three.js renders the visual comparison. Fallback sample data allow the visualization to run when the external air-quality feed cannot be retrieved.",
          "zh": "后端读取附近的 OpenAQ 观测记录，并将情景计算结果传给前端。Three.js 负责视觉比较；外部空气质量数据无法获取时，可使用备用示例数据运行。"
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
          "en": "Location and routine inputs in the actual interface",
          "zh": "实际界面中的地点与习惯输入"
        }
      }
    ]
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
      "en": "Anonymous discussion shaped by the author’s intent",
      "zh": "围绕发帖意图组织匿名讨论"
    },
    "summary": {
      "en": "In a three-person team, I built posting and reply screens and connected the Next.js interface to Supabase. I proposed matching replies to the author’s intent, such as advice, empathy, disagreement, or journaling, and wrote mode-specific prompts plus a Flask moderation endpoint for three visibility tiers.",
      "zh": "我在三人团队中开发发帖与回复界面，并将 Next.js 前端连接到 Supabase。我提出根据建议、共情、反对或日记等发帖意图组织回复，并编写各模式的提示词及 Flask 审核接口，将回复分为三个可见等级。"
    },
    "tags": [
      "Next.js",
      "Supabase",
      "Flask",
      "Prompt Engineering"
    ],
    "image": "assets/projects/voidtalk.png",
    "caption": {
      "en": "Original RoseHack presentation",
      "zh": "原 RoseHack 项目演示"
    },
    "sections": [
      {
        "title": {
          "en": "My contribution",
          "zh": "个人贡献"
        },
        "text": {
          "en": "I implemented posting and reply views and worked on their connection to the data backend. For response organization, I wrote prompts that evaluate a reply against the selected posting mode and a prototype endpoint that assigns featured, more, or hidden visibility.",
          "zh": "我实现了发帖与回复视图，并参与其与数据后端的连接。针对回复组织，我编写了按发帖模式评估回复的提示词，以及将回复划分为精选、更多或折叠类别的原型接口。"
        }
      },
      {
        "title": {
          "en": "Team product and materials",
          "zh": "团队产品与材料"
        },
        "text": {
          "en": "The team’s public submission is named Sona, while the repository and original presentation use VoidTalk. The product combines anonymous posting and private author–respondent conversations. The repository contains the moderation prototype and presentation, and Devpost documents the submitted team application.",
          "zh": "团队公开提交的产品名为 Sona，仓库和原演示中使用 VoidTalk。产品结合匿名发帖和作者与回复者之间的私密对话。仓库包含审核原型与演示材料，Devpost 记录了团队提交的应用。"
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
    "gallery": []
  },
  {
    "slug": "energy",
    "group": "coursework",
    "title": "Energy Forecasting / TC-SS-DPMixer",
    "event": {
      "en": "UCR CS228 · Independent course project",
      "zh": "UCR CS228 · 独立课程项目"
    },
    "subtitle": {
      "en": "Compact forecasting models and controlled comparisons",
      "zh": "紧凑预测模型与控制条件下的比较"
    },
    "summary": {
      "en": "I compared neural forecasting models on the UCI Appliances dataset and investigated why a persistence baseline outperformed several initial models on MAE. I then tested matched losses, feature sets, and forecast horizons, and developed a compact mixer with time-conditioned branch weights and a separate path for appliance-use spikes.",
      "zh": "我在 UCI Appliances 数据集上比较神经网络预测方法，并追查持久性基线为何在 MAE 上优于初版模型。随后统一损失函数，比较输入特征与预测时域，并开发了包含时间条件分支权重和独立用电尖峰路径的紧凑 mixer 模型。"
    },
    "tags": [
      "PyTorch",
      "Time Series",
      "Transformers",
      "Self-supervised Learning"
    ],
    "image": "assets/projects/energy-efficiency.png",
    "caption": {
      "en": "Accuracy and model-cost comparison from the coursework",
      "zh": "原课程项目中的精度与模型成本比较"
    },
    "sections": [
      {
        "title": {
          "en": "Problem and evaluation",
          "zh": "问题与评估"
        },
        "text": {
          "en": "The primary task predicts four hours of appliance energy use from sixteen hours of sensor history. Chronological training, validation, and test partitions prevent future records from entering training. A second task aggregates the series hourly and predicts the following week from the previous week.",
          "zh": "主要任务利用过去十六小时的传感器记录预测未来四小时的家电能耗。训练、验证与测试按时间顺序划分，避免未来记录进入训练。另一个任务按小时聚合序列，以过去一周预测下一周。"
        }
      },
      {
        "title": {
          "en": "Model and experiments",
          "zh": "模型与实验"
        },
        "text": {
          "en": "TC-SS-DPMixer uses time-dependent gates and separates smooth load from appliance-use spikes. The study compares linear, recurrent, mixer, and Transformer families. Experiments examine losses, inputs, component ablations, masked-patch pretraining, parameter cost, and performance across forecast horizons.",
          "zh": "TC-SS-DPMixer 使用随时间变化的门控，并区分平稳负载与家电使用尖峰。研究比较线性、循环网络、mixer 和 Transformer 方法，并考察损失函数、输入特征、组件消融、掩码片段预训练、参数成本和预测时域。"
        }
      },
      {
        "title": {
          "en": "Reported results",
          "zh": "报告中的结果"
        },
        "text": {
          "en": "In the reported four-hour configuration, TC-SS-DPMixer reached 34.83 Wh MAE with about 68K parameters, compared with 34.19 Wh and about 412K parameters for iTransformer. With 20% of labels, masked-patch pretraining reduced PatchTST MAE from 63.9 to 54.1 Wh. The complete report includes the experimental conditions, additional tasks, figures, and interpretation.",
          "zh": "在报告的四小时配置中，TC-SS-DPMixer 约有 6.8 万参数，MAE 为 34.83 Wh；iTransformer 约有 41.2 万参数，MAE 为 34.19 Wh。仅使用 20% 标签时，掩码片段预训练将 PatchTST 的 MAE 从 63.9 降至 54.1 Wh。完整报告包含实验条件、其他任务、图表和解释。"
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
    "gallery": [
      {
        "image": "assets/projects/energy.png",
        "caption": {
          "en": "Time-conditioned mixer architecture from the original report",
          "zh": "原报告中的时间条件 mixer 架构"
        }
      }
    ]
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
      "en": "Search for informative features instead of using every column",
      "zh": "通过搜索识别有效特征"
    },
    "summary": {
      "en": "I implemented forward selection and backward elimination with a one-nearest-neighbor classifier and leave-one-out validation. On the 3,000-row, 64-feature assignment dataset, forward selection found two features with 97.3% validation accuracy, compared with 68.0% using all features. I analyzed the search traces, runtime, and geometry of the selected feature space.",
      "zh": "我实现了结合 1 近邻分类器和留一验证的前向选择与后向消除。在包含 3,000 条记录、64 个特征的作业数据上，前向选择找到两个特征，验证准确率为 97.3%，使用全部特征时为 68.0%。我进一步分析了搜索轨迹、运行时间和所选特征空间的几何结构。"
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
      "en": "Forward-selection trace from the original assignment",
      "zh": "原作业中的前向选择轨迹"
    },
    "sections": [
      {
        "title": {
          "en": "Search implementation",
          "zh": "搜索实现"
        },
        "text": {
          "en": "Forward selection starts with an empty set and adds the best candidate at each level. Backward elimination starts with every feature and removes one at a time. Each candidate is scored by leave-one-out nearest-neighbor accuracy, and the best subset across all levels is recorded. NumPy array operations replace nested Python distance loops.",
          "zh": "前向选择从空集开始，每层加入当前最优候选；后向消除从完整特征集开始，每次移除一个特征。候选子集通过留一近邻准确率评估，并记录所有层中的最佳子集。距离计算使用 NumPy 数组运算替代嵌套 Python 循环。"
        }
      },
      {
        "title": {
          "en": "What the search found",
          "zh": "搜索结果"
        },
        "text": {
          "en": "On the 500-row small dataset, both methods selected features 2 and 12 with 96.6% validation accuracy. On the larger dataset, forward selection selected features 37 and 58 with 97.3%, while backward elimination reached 85.1% with feature 58 alone. These are assignment validation results under the feature-search procedure.",
          "zh": "在 500 条记录的小数据集上，两种方法都选择了特征 2 和 12，验证准确率为 96.6%。大数据集上，前向选择选出特征 37 和 58，准确率为 97.3%；后向消除仅留下特征 58，准确率为 85.1%。这些数值是作业特征搜索流程中的验证结果。"
        }
      },
      {
        "title": {
          "en": "Full submission",
          "zh": "完整作业"
        },
        "text": {
          "en": "The report includes the algorithm explanation, feature-space plots, search traces, runtime comparison, implementation, and a banknote-authentication extension. The full submission and reproducible logs are linked below.",
          "zh": "报告包含算法说明、特征空间图、搜索轨迹、运行时间比较、实现代码和钞票鉴别数据扩展。下方可查看完整作业及可复现日志。"
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
          "en": "Selected features 37 and 58 in the original assignment",
          "zh": "原作业中的特征 37 与 58"
        }
      }
    ]
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
      "en": "Compare blind search and two A* heuristics",
      "zh": "比较盲目搜索与两种 A* 启发式"
    },
    "summary": {
      "en": "I implemented uniform-cost search and A* with misplaced-tile and Manhattan-distance heuristics. A shared search routine tracks path cost, heuristic estimates, expanded nodes, and maximum queue size. Users can select graded benchmark puzzles or enter a custom board, then inspect the expansion trace and solution depth.",
      "zh": "我实现了统一代价搜索，以及使用错位数和曼哈顿距离启发式的 A*。共用搜索流程记录路径代价、启发式估计、扩展节点数与最大队列规模。用户可以选择作业测试棋盘或输入自定义棋盘，检查扩展轨迹和解的深度。"
    },
    "tags": [
      "Python",
      "A*",
      "Uniform-cost Search",
      "Heuristics"
    ],
    "image": "assets/projects/puzzle.svg",
    "caption": {
      "en": "Search structure illustrated from the implementation",
      "zh": "根据实现绘制的搜索结构"
    },
    "sections": [
      {
        "title": {
          "en": "State and search",
          "zh": "状态与搜索"
        },
        "text": {
          "en": "A puzzle stores the board and legal moves. A node stores its parent and the g, h, and f values used during expansion. All three methods share the same search routine. Uniform-cost search sets h to zero, while the two A* variants supply different heuristic functions.",
          "zh": "棋盘对象保存状态及合法移动，节点保存父节点和扩展时使用的 g、h、f 值。三种方法共用搜索流程。统一代价搜索将 h 设为零，两种 A* 分别调用不同的启发式函数。"
        }
      },
      {
        "title": {
          "en": "Comparison and submission",
          "zh": "比较与作业材料"
        },
        "text": {
          "en": "The program includes benchmark boards with solution depths from 0 to 24 and supports custom input. It prints the chosen state, accumulated cost, heuristic value, final depth, expanded-node count, and maximum queue size. The original coursework report is available with the repository, which identifies the graded submission separately from later personal improvements.",
          "zh": "程序内置解深度从 0 到 24 的测试棋盘，并支持自定义输入。输出包含被选状态、累计代价、启发式值、解深度、扩展节点数与最大队列规模。仓库附有原始作业报告，并区分了评分版本和之后的个人改进。"
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
          "en": "Original report",
          "zh": "原始作业报告"
        },
        "url": "https://github.com/cyy-07/UCR-CS170Project1_8puzzle/blob/main/Project_1_report_Yiyang_Chen.doc"
      }
    ],
    "gallery": []
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
      "en": "Compare the full fare across airline and third-party offers",
      "zh": "比较航司与第三方报价的完整费用"
    },
    "summary": {
      "en": "I designed a C++ flight-comparison program after noticing that lower advertised fares can hide additional charges. It loads simulated offers from CSV, filters routes and departure periods, and compares total costs including baggage, insurance, and service fees. Five classes separate user accounts, flight orders, and polymorphic Economy and First Class pricing.",
      "zh": "我在比较机票时发现，较低的展示票价可能隐藏额外收费，因此设计了这个 C++ 航班比价程序。程序从 CSV 读取模拟报价，按航线和出发时段筛选，并比较包含行李、保险与服务费的总价。五个类分别处理用户、航班订单及经济舱和头等舱的多态定价。"
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
          "en": "Object model",
          "zh": "对象设计"
        },
        "text": {
          "en": "UserAccount handles account interaction, while FlightOrder stores the provider, route, schedule, and fee breakdown. FareType defines a common pricing interface. EconomyClass and FirstClass override the calculation and feature display, so the selected fare is resolved through polymorphism.",
          "zh": "UserAccount 处理账户交互，FlightOrder 保存供应商、航线、时刻和费用明细。FareType 定义统一定价接口，EconomyClass 和 FirstClass 分别重写价格计算与特性显示，通过多态调用所选票价类型。"
        }
      },
      {
        "title": {
          "en": "User flow and materials",
          "zh": "使用流程与作业材料"
        },
        "text": {
          "en": "Users select a departure city, destination, time period, flight, and fare type, then inspect the detailed total before adding an option to the cart. The project uses simulated flight records for testing. The linked proposal explains the class design, while the repository contains the final source and mock data.",
          "zh": "用户依次选择出发地、目的地、时段、航班和舱位，查看详细总价后再加入购物车。项目采用模拟航班记录测试。下方提案说明类设计，仓库包含最终源码与模拟数据。"
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
    "gallery": []
  }
];
