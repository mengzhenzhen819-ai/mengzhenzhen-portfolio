import { useState } from "react";

type TabKey = "advantages" | "experience";

const timelineItems = [
  {
    title: "2022/2-至今：字节跳动",
    sub: "抖音 app 体验设计",
    details: [
      "主导抖音app激励端核心增长体系玩法优化，推动玩法做体验升级，带动了LT的有效增长",
      "0-1搭建抖音app激励端中台能力系统与设计规范制定，提升增长效率与多端复用能力",
      "负责团队相关流程问题发现及治理工作，优化流程为团队提效",
      "因工作态度积极/表现突出获得涨薪激励",
    ],
  },
  {
    title: "2020/3-2022/1：阿里巴巴集团",
    sub: "BtoC大型影视产品设计",
    details: [
      "主导灯塔专业版影视数据 App 整体改版升级：挖掘业务策略机会点，制定设计策略，推动全链路体验升级，提升用户满意度",
      "管理外包团队，确保交付质量与设计一致性",
      "工作成绩因突出获激励奖励",
    ],
  },
  {
    title: "2019/4-2020/2：滴滴出行",
    sub: "B端企业级数据产品交互设计",
    details: ["企业级数据产品体验设计：解读 BI 数据工具的使用场景及用户画像，帮助产品体验提效", "参与滴滴云项目设计，带教实习生"],
  },
  {
    title: "2017/7-2019/3：易点天下",
    sub: "UI设计",
    details: ["Dipbit App 区块链项目 UI 设计、Yeahtargete 等项目网站设计", "荣获公司「最佳工作新人」荣誉称号"],
  },
  {
    title: "2016/6-2017/6：中兴通讯",
    sub: "实习",
    details: ["实习期间负责手机桌面图标、系统设置图标及系统界面设计"],
  },
];

const projectItems = [
  {
    company: "字节",
    className: "tag-zijie",
    desc: "核心负责 抖音app端 激励增长方向玩法体验优化，参与抖音系多端场景设计，通过精细化的设计策略带动了LT的有效增长；0-1搭建抖音激励中台能力系统，外线业务仅一个半月就上线了一整套激励能力，开发成本降低45%，显著提升RD协作效率与跨团队复用效率；0-1制定设计规范标准，为上下游提效；主动优化项目合作中的流程问题，制定优化机制。",
  },
  {
    company: "阿里",
    className: "tag-ali",
    desc: "主导灯塔专业版影视数据 app 整体改版升级",
  },
  {
    company: "滴滴",
    className: "tag-didi",
    desc: "B端企业级数据 BI 产品设计 、部分滴滴云设计",
  },
  {
    company: "其他",
    className: "tag-other",
    desc: "虚拟货币类app设计",
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState<TabKey>("advantages");
  const [openTimeline, setOpenTimeline] = useState<number[]>([]);

  const toggleTimeline = (index: number) => {
    setOpenTimeline((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="section-tag">关于我</div>

        <h2 className="about-headline">
          善于发现问题，用全链路
          <br />
          设计思维辅助业务指标提升
        </h2>

        <div className="tab-nav">
          <button
            className={`tab-btn ${tab === "advantages" ? "is-active" : ""}`}
            data-tab="advantages"
            onMouseEnter={() => setTab("advantages")}
            onFocus={() => setTab("advantages")}
            onClick={() => setTab("advantages")}
            type="button"
          >
            个人优势
          </button>
          <button
            className={`tab-btn ${tab === "experience" ? "is-active" : ""}`}
            data-tab="experience"
            onMouseEnter={() => setTab("experience")}
            onFocus={() => setTab("experience")}
            onClick={() => setTab("experience")}
            type="button"
          >
            工作经历
          </button>
        </div>

        <div className={`tab-panel ${tab === "advantages" ? "is-active" : ""}`} id="panel-advantages">
          <div className="advantages-list">
            <div className="advantage-section">
              <h3 className="exp-title">经历</h3>
              <p className="exp-desc">
                大厂体验设计师，先后经历滴滴、阿里、字节跳动，具备大型 ToC / ToB
                项目设计经验，偏交互设计，善于发现问题用全链路设计思维辅助业务指标提升，驱动力目标力较强，有较高的审美眼界并具备成熟的设计方法论沉淀，同时具备一定项目管理能力
              </p>
            </div>

            <div className="advantage-section">
              <h3 className="exp-title">项目</h3>
              <div className="project-list">
                {projectItems.map((item) => (
                  <div className="project-row" key={item.company}>
                    <span className={`project-tag ${item.className}`}>{item.company}</span>
                    <p className="project-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="advantage-section">
              <h3 className="exp-title">亮点</h3>
              <p className="exp-desc">
                职业路径横跨 B端到C端多种产品形态，既有复杂业务和平台型项目经验，也有直接面向用户增长方向与转化的项目经历，项目类型完整，并在工作流中熟练使用AI工具提效
              </p>
            </div>
          </div>
        </div>

        <div className={`tab-panel ${tab === "experience" ? "is-active" : ""}`} id="panel-experience">
          <div className="timeline-list">
            {timelineItems.map((item, index) => {
              const isOpen = openTimeline.includes(index);

              return (
                <div className={`timeline-item ${isOpen ? "is-open" : ""}`} key={item.title}>
                  <div
                    className="timeline-header"
                    onClick={() => toggleTimeline(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleTimeline(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="timeline-info">
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-sub">{item.sub}</p>
                    </div>
                    <button className="timeline-toggle" type="button" aria-label="切换工作经历详情">
                      <span className="toggle-icon" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="timeline-body">
                    <ul className="work-detail-list">
                      {item.details.map((detail) => (
                        <li className="work-detail-item" key={detail}>
                          <span className="check-icon" aria-hidden="true">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="7.5" stroke="#5B6CF9" strokeWidth="1" />
                              <path
                                d="M5 8L7 10L11 6"
                                stroke="#5B6CF9"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <p className="work-detail-text">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
