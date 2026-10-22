/* 大模型入门课 · 幻灯片内容
   每一页：layout（cover / chapter / content / end）、chapter（顶部标签）、
   title（总览用）、html（页面内容）、notes（讲稿） */
window.COURSE_SLIDES = [

  /* ============ 封面 ============ */
  {
    layout: "cover",
    chapter: "开场",
    title: "封面",
    html: `
      <div class="cover-inner">
        <div>
          <div class="cover-badge">零基础 · 6 章 · 2 个实战</div>
          <h1>大模型入门课</h1>
          <p class="cover-sub">从“听不懂”到“能上手”：先搞懂它为什么这样说话，再用 DeepSeek Harness 真正干活。</p>
          <div class="cover-meta">
            <span>不用写代码</span>
            <span>每章 5–8 分钟</span>
            <span>提示词可照抄</span>
          </div>
        </div>
        <div class="cover-art">
          <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="24" y="118" width="84" height="56" rx="13" fill="#fff" stroke="#E5DCCD"/>
            <text x="66" y="153" text-anchor="middle" font-size="20" fill="#1C1917">今天</text>
            <rect x="120" y="118" width="84" height="56" rx="13" fill="#fff" stroke="#E5DCCD"/>
            <text x="162" y="153" text-anchor="middle" font-size="20" fill="#1C1917">天气</text>
            <rect x="216" y="118" width="84" height="56" rx="13" fill="#fff" stroke="#E5DCCD"/>
            <text x="258" y="153" text-anchor="middle" font-size="20" fill="#1C1917">真</text>
            <rect x="312" y="118" width="84" height="56" rx="13" fill="#FFF8F3" stroke="#C2410C" stroke-width="2" stroke-dasharray="7 6"/>
            <text x="354" y="154" text-anchor="middle" font-size="22" fill="#C2410C" font-weight="700">？</text>
            <path d="M24 210h372" stroke="#E5DCCD"/>
            <text x="24" y="238" font-size="12.5" fill="#78716C">它一次只猜一个词，然后接着猜下一个</text>
            <rect x="24" y="262" width="112" height="30" rx="8" fill="#fff" stroke="#E5DCCD"/>
            <text x="80" y="282" text-anchor="middle" font-size="12.5" fill="#1C1917">好 62%</text>
            <rect x="146" y="262" width="112" height="30" rx="8" fill="#fff" stroke="#E5DCCD"/>
            <text x="202" y="282" text-anchor="middle" font-size="12.5" fill="#1C1917">热 21%</text>
            <rect x="268" y="262" width="116" height="30" rx="8" fill="#fff" stroke="#E5DCCD"/>
            <text x="326" y="282" text-anchor="middle" font-size="12.5" fill="#1C1917">不错 9%</text>
            <circle cx="372" cy="52" r="26" fill="#C2410C" opacity="0.1"/>
            <circle cx="330" cy="34" r="9" fill="#C2410C" opacity="0.18"/>
          </svg>
        </div>
      </div>`,
    notes: "开场先给大家吃颗定心丸：这门课不需要编程、数学、英语六级，会打字就能听懂。但它也不只是听个热闹——学完你手上会多两件真本事：补全文档、比对文档。今天这一路，就是围绕这两件事展开的。"
  },

  /* ============ 开场 ============ */
  {
    layout: "content",
    chapter: "开场",
    title: "这门课只干两件事",
    html: `
      <div class="kicker">开场</div>
      <h2 class="title">这门课只干两件事</h2>
      <p class="lead">一条线搞懂它为什么这样说话，另一条线让它真的帮你干活。两条线都不需要你写代码。</p>
      <div class="grid-2 mt-24">
        <div class="card card-accent">
          <div class="card-num">A</div>
          <h3>搞懂它</h3>
          <p>大模型怎么生成文字、为什么会“幻觉”，token、上下文窗口、模型规模这些词到底在说什么。</p>
        </div>
        <div class="card card-accent">
          <div class="card-num">B</div>
          <h3>用好它</h3>
          <p>Harness 是什么、agent 循环怎么转、常用命令有哪些，最后用两个实战把文档补全和比对跑通。</p>
        </div>
      </div>
      <div class="strip">不需要编程、数学、英语六级。门槛只有一条：<strong>会打字</strong>。</div>`,
    notes: "把“懂”和“用”分开讲，是为了不让大家迷失在术语里。前半程你可能会觉得“原来如此”，后半程你会觉得“原来我能让它干活”。两条线最后会在两个实战里会合。"
  },

  {
    layout: "content",
    chapter: "开场 · 验收标准",
    title: "学完这四件事，你就入门了",
    html: `
      <div class="kicker">开场 · 验收标准</div>
      <h2 class="title">学完这四件事，你就入门了</h2>
      <div class="grid-2 mt-24">
        <div class="num-card"><span class="big-num">01</span><p>用自己的话说清：它怎么生成文字，为什么会一本正经地胡说。</p></div>
        <div class="num-card"><span class="big-num">02</span><p>解释 token、上下文窗口、模型规模、多模态这些常用词。</p></div>
        <div class="num-card"><span class="big-num">03</span><p>说清 harness 是什么、为什么需要它、agent 循环怎么运转。</p></div>
        <div class="num-card"><span class="big-num">04</span><p>动手完成一次文档补全，再一次文档比对。</p></div>
      </div>
      <p class="footnote">这四条就是验收标准。学完一章，回来对一遍。</p>`,
    notes: "先立标尺，再赶路。第 1 条和第 2 条是“能讲出来”，第 3 条是“能讲清楚”，第 4 条是“能动手做”。第 4 条最重要——听懂不等于会做，最后一定要自己在电脑上跑一遍。"
  },

  {
    layout: "content",
    chapter: "开场 · 路线图",
    title: "六个章节，两条主线",
    html: `
      <div class="kicker">开场 · 路线图</div>
      <h2 class="title">六个章节，两条主线</h2>
      <div class="grid-2 route mt-20">
        <div class="chapter-list">
          <div class="chapter-row"><span class="ch-num">01</span><span class="ch-name">大模型是怎么“说话”的</span><span class="ch-meta">8 分钟</span></div>
          <div class="chapter-row"><span class="ch-num">02</span><span class="ch-name">常用词卡片</span><span class="ch-meta">10 分钟</span></div>
          <div class="chapter-row"><span class="ch-num">03</span><span class="ch-name">为什么它会“幻觉”</span><span class="ch-meta">8 分钟</span></div>
          <div class="chapter-row"><span class="ch-num">04</span><span class="ch-name">什么是 Harness</span><span class="ch-meta">8 分钟</span></div>
          <div class="chapter-row"><span class="ch-num">05</span><span class="ch-name">上手 DeepSeek Harness</span><span class="ch-meta">10 分钟</span></div>
          <div class="chapter-row"><span class="ch-num">06</span><span class="ch-name">两个实战：补全与比对</span><span class="ch-meta">15 分钟</span></div>
        </div>
        <div class="card howto">
          <h3>怎么学最省劲</h3>
          <ul class="ticks">
            <li>一章一章往下看，别跳。</li>
            <li>术语先记住感觉，第 2 章统一讲。</li>
            <li>每章最后那页“三句话”，务必看。</li>
            <li>到实战时，打开电脑跟着敲一遍。</li>
          </ul>
        </div>
      </div>`,
    notes: "第 1 到第 3 章是“懂原理”，第 4 到第 5 章是“懂工具”，第 6 章是“真动手”。如果你赶时间，可以只记住每章的“三句话”，但第 6 章建议完整看。"
  },

  /* ============ 第 1 章 ============ */
  {
    layout: "chapter",
    chapter: "第 1 章 · 大模型是怎么“说话”的",
    title: "第 1 章 大模型是怎么“说话”的",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">01</div>
        <div>
          <div class="chapter-kicker">第 1 章</div>
          <h2 class="chapter-title">大模型是怎么“说话”的</h2>
          <p class="chapter-sub">先看它在做什么，再看它为什么会错。这一章不出现公式。</p>
        </div>
      </div>`,
    notes: "这一章只解决一个问题：它到底在干什么。把这一个问题想通，后面“幻觉”“上下文”“提示词”都会顺理成章。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 它在做什么",
    title: "它不是“想好了再说”，是“说一个词想一次”",
    html: `
      <div class="kicker">第 1 章 · 它在做什么</div>
      <h2 class="title">它不是“想好了再说”，是“说一个词想一次”</h2>
      <p class="lead">模型一次只做一个动作：看着前面的内容，猜下一个 token。猜完接上去，再猜下一个。</p>
      <div class="chain mt-32">
        <span class="chain-word">今天</span>
        <span class="chain-word">天气</span>
        <span class="chain-word">真</span>
        <span class="chain-blank">？</span>
      </div>
      <div class="grid-3 mt-28">
        <div class="mini-card"><h4>token 是积木</h4><p>模型眼里的最小单位，可能是一个字、半个词，或一个标点。</p></div>
        <div class="mini-card"><h4>一次只猜一个</h4><p>它不会边写边想全局，只是低头看眼前这一步。</p></div>
        <div class="mini-card"><h4>整段话是接出来的</h4><p>像手机输入法的联想词，一个接一个，越接越长。</p></div>
      </div>`,
    notes: "用接龙和输入法联想词这两个比喻，基本就能把“生成”讲明白。这里要强调：它不是先想好一整段再打字，而是一个词一个词往外蹦。这个认知非常重要，后面讲幻觉全靠它。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 怎么选词",
    title: "它不算“对不对”，只算“像不像”",
    html: `
      <div class="kicker">第 1 章 · 怎么选词</div>
      <h2 class="title">它不算“对不对”，只算“像不像”</h2>
      <p class="lead">同样接“今天天气真”，它给每个候选打分，挑分最高的那个写下去。</p>
      <div class="prob-list mt-28">
        <div class="prob-row"><span class="prob-word">好</span><span class="prob-track"><i style="width:62%"></i></span><span class="prob-val">62%</span></div>
        <div class="prob-row"><span class="prob-word">热</span><span class="prob-track"><i style="width:21%"></i></span><span class="prob-val">21%</span></div>
        <div class="prob-row"><span class="prob-word">不错</span><span class="prob-track"><i style="width:9%"></i></span><span class="prob-val">9%</span></div>
        <div class="prob-row"><span class="prob-word">其他</span><span class="prob-track"><i style="width:8%"></i></span><span class="prob-val">8%</span></div>
      </div>
      <p class="callout mt-24">关键：它没有“查证”这一步。这就是后面“幻觉”的根。</p>`,
    notes: "这一页是整个课程的地基。“打分、挑最高”听起来简单，但它解释了为什么模型答得流利却可能不对：流利是概率高的表现，不是事实正确的证据。讲到这里可以停一下，让学员自己接一句“今天天气真……”，体会那种“想都不想就接上”的感觉。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 它是怎么造出来的",
    title: "训练三步：读万卷书 → 学会听话 → 懂人情",
    html: `
      <div class="kicker">第 1 章 · 它是怎么造出来的</div>
      <h2 class="title">训练三步：读万卷书 → 学会听话 → 懂人情</h2>
      <div class="train-grid mt-32">
        <div class="step-card">
          <span class="step-tag">第一步</span>
          <h3>预训练</h3>
          <p class="step-analogy">读万卷书</p>
          <p>把海量文本读一遍，学会“接下来大概会是什么”。</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-card">
          <span class="step-tag">第二步</span>
          <h3>微调</h3>
          <p class="step-analogy">学会听指令</p>
          <p>拿问答和示范练手，学会“问你什么就答什么”。</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-card">
          <span class="step-tag">第三步</span>
          <h3>对齐</h3>
          <p class="step-analogy">学着讨人喜欢</p>
          <p>按人的偏好调，学会好好说话、别乱来。</p>
        </div>
      </div>
      <p class="footnote">这三步决定了它“肚子里有什么”和“说话什么风格”。</p>`,
    notes: "不用讲 RLHF 这些缩写，就讲三步：先读书、再学规矩、最后学礼貌。可以补一句：三步都做完了，它还是不会查证，因为这三步训练的都是“怎么接得更像”，不是“怎么核对事实”。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 它能记住多少",
    title: "上下文窗口：它一次只能看这么多",
    html: `
      <div class="kicker">第 1 章 · 它能记住多少</div>
      <h2 class="title">上下文窗口：它一次只能看这么多</h2>
      <p class="lead">可以把它想成一块白板。这轮对话里所有内容都写在上面，写满了就得擦掉旧的。</p>
      <div class="board mt-24">
        <div class="board-grid">
          <span class="chip">你：帮我改这段</span>
          <span class="chip">它：好的，先看文件</span>
          <span class="chip">工具：读取完成</span>
          <span class="chip">你：只改第二段</span>
          <span class="chip">它：明白</span>
          <span class="chip faded">更早的对话……</span>
          <span class="chip faded">更早的文件……</span>
          <span class="chip faded">被压缩 / 挤掉</span>
        </div>
      </div>
      <p class="callout mt-24">聊太久它会“忘事”，不是它不想记，是台面就这么大。窗口越大，一次能塞进去的资料越多。</p>`,
    notes: "可以用“办公桌”代替白板：桌子就那么大，新文件放上来，旧文件就得收走。这样学员就能理解为什么长对话会丢细节，也能理解为什么“把资料贴进去”比“让它自己回忆”靠谱。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 为什么答案会变",
    title: "同样的输入，为什么两次回答不一样？",
    html: `
      <div class="kicker">第 1 章 · 为什么答案会变</div>
      <h2 class="title">同样的输入，为什么两次回答不一样？</h2>
      <p class="lead">因为它不是查表，而是按概率“抽签”。抽签的随机程度，由“温度”这个旋钮决定。</p>
      <div class="grid-2 mt-28">
        <div class="dial-card">
          <div class="dial-head"><span class="mono">温度 0.2</span><span class="dial-tag">稳定</span></div>
          <div class="dial-track"><i style="width:22%"></i></div>
          <p>更保守，答案更可复现。适合写文档、改代码、做表。</p>
        </div>
        <div class="dial-card">
          <div class="dial-head"><span class="mono">温度 0.9</span><span class="dial-tag">发散</span></div>
          <div class="dial-track"><i style="width:88%"></i></div>
          <p>更愿意冒险，答案更有创意。适合起标题、想点子。</p>
        </div>
      </div>
      <p class="footnote">重要的事情别赌运气：温度调低，并且要求它“只依据给定资料回答”。</p>`,
    notes: "这一页解释“为什么同一个问题问两次答案不同”。温度不是越高越好，也不是越低越好，而是按任务选：要稳就低，要灵感就高。顺便埋一个伏笔：稳定不等于正确，温度低它也可能一本正经地错。"
  },

  {
    layout: "content",
    chapter: "第 1 章 · 小结",
    title: "三句话记住第 1 章",
    html: `
      <div class="kicker">第 1 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p>它是一台<strong>猜下一个 token</strong> 的机器，一次只猜一个。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p>预训练、微调、对齐，<strong>三步</strong>把它造出来。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p>它只看得到<strong>上下文窗口</strong>里的内容，超出就会忘。</p></div>
      </div>`,
    notes: "这三句话建议让学员自己复述一遍，能复述出来才算真懂。下一章开始讲词，如果这里没通，词会越听越乱。"
  },

  /* ============ 第 2 章 ============ */
  {
    layout: "chapter",
    chapter: "第 2 章 · 常用词卡片",
    title: "第 2 章 常用词卡片",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">02</div>
        <div>
          <div class="chapter-kicker">第 2 章</div>
          <h2 class="chapter-title">常用词卡片</h2>
          <p class="chapter-sub">十个词，够你听懂九成对话。每个词配一句话和一个生活类比。</p>
        </div>
      </div>`,
    notes: "这一章是工具页，不用背。听的时候抓类比，用的时候回来查。十张卡片按“模型本身、模型能力、你怎么用”分三组。"
  },

  {
    layout: "content",
    chapter: "第 2 章 · 词卡片 1/3",
    title: "三个最常被问到的词",
    html: `
      <div class="kicker">第 2 章 · 词卡片 1/3</div>
      <h2 class="title">三个最常被问到的词</h2>
      <div class="word-grid mt-24">
        <div class="word-card">
          <div class="term mono">token</div>
          <p class="definition">模型眼里的最小字块，也是计费和长度的单位。</p>
          <p class="analogy">像乐高积木：一句话由很多块拼成。</p>
        </div>
        <div class="word-card">
          <div class="term mono">上下文窗口</div>
          <p class="definition">它一次能记住的内容上限。</p>
          <p class="analogy">像白板大小：板子就那么大。</p>
        </div>
        <div class="word-card">
          <div class="term mono">7B / 70B</div>
          <p class="definition">B 是十亿参数。数字越大通常越强，也更贵。</p>
          <p class="analogy">像发动机排量：大不等于更适合你家。</p>
        </div>
      </div>`,
    notes: "token 是使用模型时最常打交道的词：它既是长度，也是钱。模型规模那张卡要强调“大不等于更懂你”，小模型做日常活儿往往又快又便宜。"
  },

  {
    layout: "content",
    chapter: "第 2 章 · 词卡片 2/3",
    title: "能力与改造的三个词",
    html: `
      <div class="kicker">第 2 章 · 词卡片 2/3</div>
      <h2 class="title">能力与改造的三个词</h2>
      <div class="word-grid mt-24">
        <div class="word-card">
          <div class="term mono">多模态</div>
          <p class="definition">不只看文字，还能看图、听声音。</p>
          <p class="analogy">从“只会读”变成“五感齐全”。</p>
        </div>
        <div class="word-card">
          <div class="term mono">推理模型</div>
          <p class="definition">先打草稿、再回答，愿意多想几步。</p>
          <p class="analogy">像考试前先在草稿纸上算一遍。</p>
        </div>
        <div class="word-card">
          <div class="term mono">微调</div>
          <p class="definition">在通用模型上再补一门专业课。</p>
          <p class="analogy">像入职后的岗前培训。</p>
        </div>
      </div>`,
    notes: "多模态现在很常见：拍照识图、看表格、听录音。推理模型的特点是“慢一点但更稳”，适合复杂问题。微调是“改性格、补专业”，一般个人用户用不到，知道概念就行。"
  },

  {
    layout: "content",
    chapter: "第 2 章 · 词卡片 3/3",
    title: "和你每天打交道的四个词",
    html: `
      <div class="kicker">第 2 章 · 词卡片 3/3</div>
      <h2 class="title">和你每天打交道的四个词</h2>
      <div class="word-grid word-grid-4 mt-24">
        <div class="word-card">
          <div class="term mono">提示词</div>
          <p class="definition">你给它的任务说明书。</p>
          <p class="analogy">像给新同事的 brief。</p>
        </div>
        <div class="word-card">
          <div class="term mono">RAG</div>
          <p class="definition">先查资料，再回答。</p>
          <p class="analogy">像开卷考试。</p>
        </div>
        <div class="word-card">
          <div class="term mono">Agent</div>
          <p class="definition">会自己用工具、分多步干活。</p>
          <p class="analogy">像会自己跑腿的助理。</p>
        </div>
        <div class="word-card">
          <div class="term mono">skill</div>
          <p class="definition">把一套固定做法打包，下次一句话复用。</p>
          <p class="analogy">像一份写好的 SOP。</p>
        </div>
      </div>`,
    notes: "这四个词是后半程的高频词。提示词相当于“任务说明书”，写得好坏直接决定结果。RAG 就是“先查再答”，后面讲降低幻觉还会用到。Agent 和 skill 是 harness 时代的核心概念。"
  },

  {
    layout: "content",
    chapter: "第 2 章 · 小测",
    title: "这些词，你都认识了吗？",
    html: `
      <div class="kicker">第 2 章 · 小测</div>
      <h2 class="title">这些词，你都认识了吗？</h2>
      <p class="lead">点一下选项，答案就出来。</p>
      <div class="quiz-grid mt-24">
        <div class="quiz">
          <p class="quiz-q">1. 上下文窗口变大，最直接的好处是？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="0">模型变得更聪明</button>
            <button class="quiz-option" data-correct="1">一次能处理更多内容</button>
            <button class="quiz-option" data-correct="0">再也不会幻觉</button>
          </div>
        </div>
        <div class="quiz">
          <p class="quiz-q">2. 想让回答更稳定，应该？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="0">调高温度</button>
            <button class="quiz-option" data-correct="1">调低温度</button>
            <button class="quiz-option" data-correct="0">换成多模态模型</button>
          </div>
        </div>
        <div class="quiz">
          <p class="quiz-q">3. 7B 里的 B 指的是？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="0">字节（Byte）</button>
            <button class="quiz-option" data-correct="1">十亿参数（Billion）</button>
            <button class="quiz-option" data-correct="0">版本号</button>
          </div>
        </div>
      </div>`,
    notes: "小测的作用不是考试，是让学员动一下手。答案分别是 2、2、2，讲的时候别提前说，让他们自己点。错了也没关系，回到对应卡片再看一眼。"
  },

  {
    layout: "content",
    chapter: "第 2 章 · 小结",
    title: "三句话记住第 2 章",
    html: `
      <div class="kicker">第 2 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p><strong>token</strong> 是字块，也决定长度和费用。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p>大模型大的是<strong>参数和胃口</strong>，不是“更懂你”。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p>提示词是<strong>任务说明书</strong>，写清楚比写漂亮重要。</p></div>
      </div>`,
    notes: "这一章不要求记住全部十个词，记住“token、窗口、规模、提示词”四个就够用了。其余的词在实际用到时查一下即可。"
  },

  /* ============ 第 3 章 ============ */
  {
    layout: "chapter",
    chapter: "第 3 章 · 为什么它会“幻觉”",
    title: "第 3 章 为什么它会“幻觉”",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">03</div>
        <div>
          <div class="chapter-kicker">第 3 章</div>
          <h2 class="chapter-title">为什么它会“幻觉”</h2>
          <p class="chapter-sub">它不是坏，也不是笨。它只是太擅长“接得像”。</p>
        </div>
      </div>`,
    notes: "这一章帮大家消除一个误解：模型胡说八道不是程序坏了，而是它的工作方式必然带来的副作用。理解了这一点，你就不会跟它生气，而是知道怎么防。"
  },

  {
    layout: "content",
    chapter: "第 3 章 · 本质",
    title: "幻觉的本质：它在猜“最像答案的话”",
    html: `
      <div class="kicker">第 3 章 · 本质</div>
      <h2 class="title">幻觉的本质：它在猜“最像答案的话”</h2>
      <div class="versus mt-28">
        <div class="v-col">
          <div class="v-head">它在做的事</div>
          <ul>
            <li>顺着上一句往下接</li>
            <li>挑概率最高、读起来最顺的</li>
            <li>手里没料，就用“像”的补上</li>
          </ul>
        </div>
        <div class="v-col v-want">
          <div class="v-head">你希望它做的事</div>
          <ul>
            <li>去查证，找到依据</li>
            <li>找不到就说“不知道”</li>
            <li>每条结论都能指出出处</li>
          </ul>
        </div>
      </div>
      <p class="callout mt-24">接得顺，不等于接得对。幻觉不是 bug，是“用概率补空白”的副作用。</p>`,
    notes: "左右两栏是关键：左边是它的本能，右边是你的期待。它能流畅回答，是因为左边做得好；它会胡说，也是因为左边做得好过头了。这句“接得顺不等于接得对”，可以让大家跟着念一遍。"
  },

  {
    layout: "content",
    chapter: "第 3 章 · 常见原因",
    title: "它一般在哪儿栽跟头",
    html: `
      <div class="kicker">第 3 章 · 常见原因</div>
      <h2 class="title">它一般在哪儿栽跟头</h2>
      <div class="cause-grid mt-24">
        <div class="cause-card"><span class="cause-num">1</span><h4>长尾知识太稀疏</h4><p>冷门的地方志、偏门的书，它见得少，只能照着大概拼。</p></div>
        <div class="cause-card"><span class="cause-num">2</span><h4>训练数据有截止日期</h4><p>截止之后的事它真不知道，问最新消息只能猜。</p></div>
        <div class="cause-card"><span class="cause-num">3</span><h4>提示太含糊</h4><p>“帮我写个方案”，给谁看、多长、什么口吻，全靠它替你填。</p></div>
        <div class="cause-card"><span class="cause-num">4</span><h4>缺少“我不知道”的习惯</h4><p>训练时给出答案更容易得分，所以它更爱先开口。</p></div>
        <div class="cause-card"><span class="cause-num">5</span><h4>上下文里没有依据</h4><p>你说得越像真的，它接得越像真的。</p></div>
      </div>
      <p class="footnote">前两个是它的先天条件，后三个是你能动手改的。</p>`,
    notes: "五个原因里，最容易改的是第 3 个和第 5 个：把提示说清楚、把资料贴进去。第 1 个和第 2 个只能靠“给资料”绕过。第 4 个要靠你在提示词里明确说“不知道就说不知道”。"
  },

  {
    layout: "content",
    chapter: "第 3 章 · 对策",
    title: "四招，把幻觉压下去",
    html: `
      <div class="kicker">第 3 章 · 对策</div>
      <h2 class="title">四招，把幻觉压下去</h2>
      <div class="grid-4 mt-24">
        <div class="move-card"><span class="move-num">1</span><h4>先把资料给它</h4><p>贴原文、给文件路径，让它有据可依。</p></div>
        <div class="move-card"><span class="move-num">2</span><h4>要求出处</h4><p>“第几段、哪句话说的”，让它指回来。</p></div>
        <div class="move-card"><span class="move-num">3</span><h4>让它自查一遍</h4><p>“再核对一次，标出你不确定的地方。”</p></div>
        <div class="move-card"><span class="move-num">4</span><h4>人来把关</h4><p>金额、日期、责任，最终必须人签字。</p></div>
      </div>
      <p class="callout mt-28">顺序别反：先给料，再要证据，最后才放权。</p>`,
    notes: "这四招不用记全，记住第一招就赢一半：把资料给它。第三招“自查”很实用，一句话就能让它自己找漏洞。第四招是底线：它再顺，关键结论也得人看过。"
  },

  {
    layout: "content",
    chapter: "第 3 章 · 小结",
    title: "三句话记住第 3 章",
    html: `
      <div class="kicker">第 3 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p>它猜的是<strong>“最像答案的话”</strong>，不是事实。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p>五个原因里，<strong>提示含糊</strong>和<strong>没有依据</strong>最常犯。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p>给资料、要出处、人来把关，<strong>顺序别反</strong>。</p></div>
      </div>`,
    notes: "这一章的收尾可以联系下一章：既然它缺工具、缺查证能力，那就给它配一套“手脚”和“规矩”，这就是 harness 要干的事。"
  },

  /* ============ 第 4 章 ============ */
  {
    layout: "chapter",
    chapter: "第 4 章 · 什么是 Harness",
    title: "第 4 章 什么是 Harness",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">04</div>
        <div>
          <div class="chapter-kicker">第 4 章</div>
          <h2 class="chapter-title">什么是 Harness</h2>
          <p class="chapter-sub">模型是发动机，harness 是把动力变成一辆车的那一整套东西。</p>
        </div>
      </div>`,
    notes: "从这里开始进入“工具”部分。先讲清楚为什么需要 harness：模型只会说，不会做。harness 就是给它装上手脚、记忆和规矩。"
  },

  {
    layout: "content",
    chapter: "第 4 章 · 一句话理解",
    title: "模型是发动机，harness 是底盘和方向盘",
    html: `
      <div class="kicker">第 4 章 · 一句话理解</div>
      <h2 class="title">模型是发动机，harness 是底盘和方向盘</h2>
      <div class="engine-grid mt-28">
        <div class="engine-panel">
          <span class="engine-label">模型</span>
          <h3>发动机</h3>
          <p>只会往外吐文字。力气很大，但它不认路、不会拐弯。</p>
        </div>
        <div class="engine-plus">+</div>
        <div class="engine-panel engine-panel-alt">
          <span class="engine-label">Harness</span>
          <h3>底盘、方向盘、仪表盘</h3>
          <p>工具、循环、记忆、权限。有了它，动力才变成一辆能上路的车。</p>
        </div>
      </div>
      <p class="callout mt-28">同一台发动机，装进不同的车，跑出来的效果完全不一样。模型一样、体验差很多，差的往往就是 harness。</p>`,
    notes: "这个比喻能解释一个常见困惑：为什么同一个模型，在不同产品里用起来差别那么大？因为底盘和方向盘不一样。harness 不是模型的一部分，是模型外面那一层。"
  },

  {
    layout: "content",
    chapter: "第 4 章 · 它补了什么",
    title: "光有模型不够，harness 补上四件事",
    html: `
      <div class="kicker">第 4 章 · 它补了什么</div>
      <h2 class="title">光有模型不够，harness 补上四件事</h2>
      <div class="grid-2 mt-24">
        <div class="card"><div class="card-num">01</div><h3>工具</h3><p>读写文件、执行命令、检索资料。让它能真的碰到你的文档，而不是只在嘴上说。</p></div>
        <div class="card"><div class="card-num">02</div><h3>循环</h3><p>观察 → 思考 → 行动 → 再观察。做一步、看一眼结果，再决定下一步。</p></div>
        <div class="card"><div class="card-num">03</div><h3>上下文管理</h3><p>压缩、记忆、分清哪段对话属于哪次任务。桌子满了，把旧的收进抽屉。</p></div>
        <div class="card"><div class="card-num">04</div><h3>权限与可观测</h3><p>沙箱、审批、全程可回看。它能动手，你就得管得住手。</p></div>
      </div>`,
    notes: "四件事里，工具和循环是“能力”，上下文管理和权限是“可靠性”。缺了前两个，它干不了活；缺了后两个，你不敢让它干活。"
  },

  {
    layout: "content",
    chapter: "第 4 章 · 原理",
    title: "Agent 循环：它是怎么自己干完一件事的",
    html: `
      <div class="kicker">第 4 章 · 原理</div>
      <h2 class="title">Agent 循环：它是怎么自己干完一件事的</h2>
      <div class="loop-wrap mt-16">
        <svg viewBox="0 0 560 300" class="loop-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="#C2410C"/>
            </marker>
          </defs>
          <circle cx="280" cy="150" r="112" stroke="#E5DCCD" stroke-dasharray="4 7"/>
          <rect x="196" y="18" width="168" height="54" rx="12" fill="#fff" stroke="#E5DCCD"/>
          <text x="280" y="41" text-anchor="middle" font-size="15" font-weight="700" fill="#1C1917">观察</text>
          <text x="280" y="61" text-anchor="middle" font-size="11.5" fill="#78716C">读文件 · 看输出</text>
          <rect x="368" y="123" width="168" height="54" rx="12" fill="#fff" stroke="#E5DCCD"/>
          <text x="452" y="146" text-anchor="middle" font-size="15" font-weight="700" fill="#1C1917">思考</text>
          <text x="452" y="166" text-anchor="middle" font-size="11.5" fill="#78716C">决定下一步做什么</text>
          <rect x="196" y="228" width="168" height="54" rx="12" fill="#fff" stroke="#E5DCCD"/>
          <text x="280" y="251" text-anchor="middle" font-size="15" font-weight="700" fill="#1C1917">行动</text>
          <text x="280" y="271" text-anchor="middle" font-size="11.5" fill="#78716C">改文件 · 跑命令</text>
          <rect x="24" y="123" width="168" height="54" rx="12" fill="#FFF8F3" stroke="#F3C6AE"/>
          <text x="108" y="146" text-anchor="middle" font-size="15" font-weight="700" fill="#9A3412">结果</text>
          <text x="108" y="166" text-anchor="middle" font-size="11.5" fill="#9A3412">回到上下文里</text>
          <path d="M366 45 C420 45 452 78 452 119" stroke="#C2410C" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M452 179 C452 210 430 226 402 226" stroke="#C2410C" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M194 255 C150 255 108 220 108 181" stroke="#C2410C" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M108 121 C108 80 140 45 190 45" stroke="#C2410C" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="280" y="146" text-anchor="middle" font-size="12" fill="#78716C">一轮 = 一次</text>
          <text x="280" y="164" text-anchor="middle" font-size="12" fill="#78716C">工具调用</text>
        </svg>
        <div class="loop-text">
          <h3>它怎么把一件事干完</h3>
          <p>模型决定“下一步查什么、改什么”，harness 把动作执行掉，再把结果塞回上下文。模型看到新结果，再决定下一步。</p>
          <div class="loop-example">改一个 bug：读文件 → 定位问题 → 改代码 → 跑测试 → 看报错 → 再改。它不会只答一句就结束。</div>
        </div>
      </div>`,
    notes: "这张图是整门课最重要的一张。顺时针转一圈，就是一次“工具调用”。重点讲“结果回到上下文”这一步——没有它，模型就只是瞎猜；有了它，模型才能根据真实情况调整。"
  },

  {
    layout: "content",
    chapter: "第 4 章 · 和聊天框的区别",
    title: "聊天框和 harness，差在哪",
    html: `
      <div class="kicker">第 4 章 · 和聊天框的区别</div>
      <h2 class="title">聊天框和 harness，差在哪</h2>
      <table class="cmp-table mt-24">
        <thead>
          <tr><th></th><th>普通聊天框</th><th>Harness</th></tr>
        </thead>
        <tbody>
          <tr><td>怎么推进</td><td>你问一句，它答一句</td><td>自己决定下一步，直到完成</td></tr>
          <tr><td>能碰到什么</td><td>只有你粘贴进去的文字</td><td>文件、命令、搜索结果</td></tr>
          <tr><td>记忆</td><td>换个话题就忘了</td><td>压缩、跨轮继续</td></tr>
          <tr><td>可追溯</td><td>说错了只能重问</td><td>每一步都有记录，可回看</td></tr>
        </tbody>
      </table>`,
    notes: "这张表回答“我用网页聊天不就行了吗”。一句话总结：聊天框给你一个答案，harness 给你一个结果。答案要你自己落地，结果它已经替你落到文件里了。"
  },

  {
    layout: "content",
    chapter: "第 4 章 · 小结",
    title: "三句话记住第 4 章",
    html: `
      <div class="kicker">第 4 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p>模型负责<strong>说</strong>，harness 负责<strong>做到</strong>。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p>工具、循环、上下文、权限，<strong>四件事</strong>补齐。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p>核心是 <strong>agent 循环</strong>：做一步、看一眼、再决定下一步。</p></div>
      </div>`,
    notes: "如果只能记一句，记“模型负责说，harness 负责做到”。这句话会在第 6 章的实战里反复出现。"
  },

  /* ============ 第 5 章 ============ */
  {
    layout: "chapter",
    chapter: "第 5 章 · 上手 DeepSeek Harness",
    title: "第 5 章 上手 DeepSeek Harness",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">05</div>
        <div>
          <div class="chapter-kicker">第 5 章</div>
          <h2 class="chapter-title">上手 DeepSeek Harness</h2>
          <p class="chapter-sub">三种开始方式、五个常用命令、四条提示词要素，再加三条安全习惯。</p>
        </div>
      </div>`,
    notes: "这一章开始动手。先讲怎么启动，再讲命令，最后讲怎么写提示词。命令不用背，用两次手就熟。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 怎么开始",
    title: "三种开始方式，挑一种就能上路",
    html: `
      <div class="kicker">第 5 章 · 怎么开始</div>
      <h2 class="title">三种开始方式，挑一种就能上路</h2>
      <div class="grid-3 mt-24">
        <div class="cmd-card">
          <code>dsh web</code>
          <h4>打开浏览器界面</h4>
          <p>菜都摆在眼前，点点就能试。新手先用这个。</p>
        </div>
        <div class="cmd-card">
          <code>dsh headless "任务"</code>
          <h4>跑一次就退出</h4>
          <p>把结果打印出来就结束，适合放进脚本自动跑。</p>
        </div>
        <div class="cmd-card">
          <code>dsh &lt;profile&gt;</code>
          <h4>按你的配置启动</h4>
          <p>把习惯固定成一套档位，熟练之后再玩。</p>
        </div>
      </div>
      <p class="footnote">小提示：你在哪个目录运行，哪里就是它默认的工作区。</p>`,
    notes: "新手就从 dsh web 开始，有界面、有按钮、能看见它在干什么。headless 适合放进自动化流程，比如定时帮你整理文档。profile 是进阶用法，先知道有这么回事。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 常用命令",
    title: "五个命令，撑住大部分场景",
    html: `
      <div class="kicker">第 5 章 · 常用命令</div>
      <h2 class="title">五个命令，撑住大部分场景</h2>
      <table class="cmd-table mt-20">
        <thead>
          <tr><th>命令</th><th>什么时候用</th><th>会发生什么</th></tr>
        </thead>
        <tbody>
          <tr><td><code>/plan</code></td><td>大改动之前</td><td>先给你一份计划，你批准了才动手</td></tr>
          <tr><td><code>/plan off</code></td><td>想直接干</td><td>退出计划模式</td></tr>
          <tr><td><code>/compact</code></td><td>聊久了变慢、变贵</td><td>把前面的对话压成摘要，腾出空间</td></tr>
          <tr><td><code>/goal</code></td><td>跨很多轮的大任务</td><td>设定长期目标，让它知道最终要什么</td></tr>
          <tr><td><code>/feedback</code></td><td>用完想吐槽或点赞</td><td>记录一条反馈，不会打断对话</td></tr>
        </tbody>
      </table>
      <p class="footnote">不用背。先用 /plan 和 /compact，两个就够你撑过 80% 的场景。</p>`,
    notes: "重点讲 /plan：它让 agent 先出方案再动手，是防翻车最有效的一招。/compact 是“桌子满了收一收”，长任务里很常用。/goal 适合多轮大任务，/feedback 是给产品提意见的，不影响对话。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 提示词",
    title: "好提示词，四个要素缺一不可",
    html: `
      <div class="kicker">第 5 章 · 提示词</div>
      <h2 class="title">好提示词，四个要素缺一不可</h2>
      <div class="grid-4 mt-20">
        <div class="mini-card"><h4>目标</h4><p>你要什么结果，一句话说清。</p></div>
        <div class="mini-card"><h4>材料</h4><p>文件路径、参考资料、正例。</p></div>
        <div class="mini-card"><h4>约束</h4><p>风格、长度，哪些地方不许动。</p></div>
        <div class="mini-card"><h4>验收</h4><p>怎么算完成：测试通过、格式一致、列出差异。</p></div>
      </div>
      <div class="prompt-card mt-24">
        <div class="prompt-head">照这个结构写</div>
        <pre>读一下 docs/README.md，只补「快速开始」和「常见问题」两节，其他段落不要动。
沿用原有标题层级和语气，写完后列出你改了哪些地方。</pre>
      </div>`,
    notes: "四个要素里，初学者最容易漏的是“约束”和“验收”。不写约束，它会顺手把整篇重写；不写验收，你不知道它算不算干完。这段示例可以直接抄。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 安全习惯",
    title: "三条安全习惯，比技巧更重要",
    html: `
      <div class="kicker">第 5 章 · 安全习惯</div>
      <h2 class="title">三条安全习惯，比技巧更重要</h2>
      <div class="rule-list mt-24">
        <div class="rule-row"><span class="rule-num">1</span><div><h4>先只读</h4><p>让它先读、先列、先提建议，别一上来就改文件。</p></div></div>
        <div class="rule-row"><span class="rule-num">2</span><div><h4>看 diff</h4><p>改完看它到底动了哪几行，重点看有没有编出不存在的命令和配置。</p></div></div>
        <div class="rule-row"><span class="rule-num">3</span><div><h4>小步提交</h4><p>一次一件事，随时能退回去。</p></div></div>
      </div>
      <p class="callout mt-20">有审批提示就认真看一眼，别一路点“同意”。</p>`,
    notes: "这三条比任何提示词技巧都重要。先只读，能避免它一上来就改坏文件；看 diff，能发现它编造的东西；小步提交，出问题能退。审批提示不是碍事，是安全带。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 小测",
    title: "命令和习惯，你记住了吗？",
    html: `
      <div class="kicker">第 5 章 · 小测</div>
      <h2 class="title">命令和习惯，你记住了吗？</h2>
      <p class="lead">点一下选项，答案就出来。</p>
      <div class="quiz-grid mt-24">
        <div class="quiz">
          <p class="quiz-q">1. 想让它先给方案、再动手，用哪个命令？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="1">/plan</button>
            <button class="quiz-option" data-correct="0">/compact</button>
            <button class="quiz-option" data-correct="0">/feedback</button>
          </div>
        </div>
        <div class="quiz">
          <p class="quiz-q">2. 聊久了变慢、变贵，先试哪个？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="0">/goal</button>
            <button class="quiz-option" data-correct="1">/compact</button>
            <button class="quiz-option" data-correct="0">/plan off</button>
          </div>
        </div>
        <div class="quiz">
          <p class="quiz-q">3. 让它改文档之前，最稳妥的第一步？</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="0">直接让它重写全文</button>
            <button class="quiz-option" data-correct="1">先让它读并列出问题</button>
            <button class="quiz-option" data-correct="0">先关掉审批提示</button>
          </div>
        </div>
      </div>`,
    notes: "三道题对应三个最容易踩的坑：不规划就动手、上下文爆了不知道压缩、上手就让它改。答案都在前面几页，答错就回去翻一眼。"
  },

  {
    layout: "content",
    chapter: "第 5 章 · 小结",
    title: "三句话记住第 5 章",
    html: `
      <div class="kicker">第 5 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p>新手从 <strong>dsh web</strong> 开始，在哪个目录启动，哪里就是工作区。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p>大改动先 <strong>/plan</strong>，聊久了用 <strong>/compact</strong>。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p>提示词写清<strong>目标、材料、约束、验收</strong>，先只读再看 diff。</p></div>
      </div>`,
    notes: "到这里，“懂工具”就完成了。下一章开始真动手：先补全一份文档，再比对两版文档。建议现在就让学员打开 dsh web，跟着下一章操作。"
  },

  /* ============ 第 6 章 ============ */
  {
    layout: "chapter",
    chapter: "第 6 章 · 实战一：文档补全",
    title: "第 6 章 实战一：文档补全",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">06</div>
        <div>
          <div class="chapter-kicker">第 6 章</div>
          <h2 class="chapter-title">实战一：文档补全</h2>
          <p class="chapter-sub">一份写了一半的 README，缺两节。四步补完，风格不变。</p>
        </div>
      </div>`,
    notes: "实战一是补全，考验的是“贴着原文写”的能力。这一章会给一段可以直接复制的提示词，重点看它怎么把范围写死。"
  },

  {
    layout: "content",
    chapter: "第 6 章 · 场景",
    title: "场景：一份写了一半的 README",
    html: `
      <div class="kicker">第 6 章 · 场景</div>
      <h2 class="title">场景：一份写了一半的 README</h2>
      <div class="grid-2 mt-20">
        <div class="doc-mock">
          <div class="doc-line doc-title">产品说明书 v0.3</div>
          <div class="doc-line ok">## 安装 <span class="badge-ok">已有</span></div>
          <div class="doc-line miss">## 快速开始 <span class="badge-miss">缺</span></div>
          <div class="doc-line miss">## 常见问题 <span class="badge-miss">缺</span></div>
          <div class="doc-line ok">## 许可证 <span class="badge-ok">已有</span></div>
        </div>
        <div class="steps">
          <div class="step"><span class="step-num">1</span><p><strong>给它路径，先读。</strong>别跳过，不然它只能凭空编。</p></div>
          <div class="step"><span class="step-num">2</span><p><strong>让它列缺失项。</strong>这份清单就是补全大纲。</p></div>
          <div class="step"><span class="step-num">3</span><p><strong>限定范围，照原风格补。</strong>写死“只补这两节”。</p></div>
          <div class="step"><span class="step-num">4</span><p><strong>人来审 diff。</strong>看有没有编造，有没有偷偷改原文。</p></div>
        </div>
      </div>`,
    notes: "四步里最容易跳过的是第一步。很多人一上来就说“帮我写个快速开始”，它没见过你的项目，只能编。先让它读，是让后面所有内容有依据的前提。"
  },

  {
    layout: "content",
    chapter: "第 6 章 · 照着抄",
    title: "把四步写成一段提示词",
    html: `
      <div class="kicker">第 6 章 · 照着抄</div>
      <h2 class="title">把四步写成一段提示词</h2>
      <div class="grid-2 mt-20">
        <div class="prompt-card">
          <div class="prompt-head">复制这段</div>
          <pre>读一下 README.md，先列出缺失的章节，先别改文件。
只补「快速开始」和「常见问题」两节，其他段落不要动。
沿用原有的标题层级和语气，不要另起炉灶。
写完后，告诉我你改了哪些地方。</pre>
          <p class="prompt-why">先读后写 · 范围写死 · 风格约束 · 改动可查</p>
        </div>
        <div class="diff-block">
          <div class="diff-head">它补出来的效果</div>
          <div class="diff-line"><span class="diff-mark add">+</span><span>## 快速开始</span></div>
          <div class="diff-line"><span class="diff-mark add">+</span><span>1. 克隆仓库</span></div>
          <div class="diff-line"><span class="diff-mark add">+</span><span>2. 复制 .env.example 为 .env</span></div>
          <div class="diff-line"><span class="diff-mark add">+</span><span>3. 运行 dsh web</span></div>
          <div class="diff-line"><span class="diff-mark"> </span><span class="diff-muted">（原有段落保持不动）</span></div>
        </div>
      </div>`,
    notes: "这段提示词的四句话，对应刚才的四步。可以让学员逐句念一遍，体会每一句在防什么：先读防编造、范围防全篇重写、风格防两种味道、改动可查防偷偷改。"
  },

  {
    layout: "content",
    chapter: "第 6 章 · 小结",
    title: "三句话记住第 6 章",
    html: `
      <div class="kicker">第 6 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p><strong>先读后写</strong>，让它有依据再动笔。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p><strong>范围写死</strong>，只补该补的，别让它顺手重写。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p><strong>人看 diff</strong>，重点查编造和偷偷修改。</p></div>
      </div>`,
    notes: "补全这件事，本质上不是“让它写”，而是“让它按你的规矩写”。规矩就是这三句。下一章比对也是同一个思路：先定规矩，再让它干活。"
  },

  /* ============ 第 7 章 ============ */
  {
    layout: "chapter",
    chapter: "第 7 章 · 实战二：文档比对",
    title: "第 7 章 实战二：文档比对",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">07</div>
        <div>
          <div class="chapter-kicker">第 7 章</div>
          <h2 class="chapter-title">实战二：文档比对</h2>
          <p class="chapter-sub">两版文档摆在面前，老板只问一句：到底哪儿变了？</p>
        </div>
      </div>`,
    notes: "比对比补全更考验“结构化输出”。目标不是给出一堆红绿标记，而是给出一张能拿给别人看的差异表。"
  },

  {
    layout: "content",
    chapter: "第 7 章 · 场景",
    title: "场景：同一份合同的 v1 和 v2",
    html: `
      <div class="kicker">第 7 章 · 场景</div>
      <h2 class="title">场景：同一份合同的 v1 和 v2</h2>
      <div class="grid-2 mt-20">
        <div class="doc-pair">
          <div class="doc-chip">v1 旧版</div>
          <div class="doc-chip doc-chip-new">v2 新版</div>
          <p class="pair-note">老板只问一句：到底哪儿变了？</p>
        </div>
        <div class="steps">
          <div class="step"><span class="step-num">1</span><p><strong>确认同源。</strong>是同一份文档的两次修订，不是两回事。</p></div>
          <div class="step"><span class="step-num">2</span><p><strong>按标题对齐。</strong>两版并排看，别先读完一本再读另一本。</p></div>
          <div class="step"><span class="step-num">3</span><p><strong>输出差异表。</strong>位置 / 原文 / 新版 / 影响 / 建议。</p></div>
          <div class="step"><span class="step-num">4</span><p><strong>标人工确认。</strong>语义变了的，必须有人签字。</p></div>
        </div>
      </div>`,
    notes: "第一步经常被忽略：万一两版根本不是同一份文档，后面比得再细也没意义。第二步的关键是“按标题对齐”，标题是天然的锚点，比逐字 diff 靠谱得多。"
  },

  {
    layout: "content",
    chapter: "第 7 章 · 差异表",
    title: "一张表，把“哪儿变了”说清楚",
    html: `
      <div class="kicker">第 7 章 · 差异表</div>
      <h2 class="title">一张表，把“哪儿变了”说清楚</h2>
      <table class="diff-table mt-20">
        <thead>
          <tr><th>位置</th><th>原文</th><th>新版</th><th>影响</th><th>建议</th></tr>
        </thead>
        <tbody>
          <tr><td>3.2 付款</td><td>三个工作日内</td><td>五个自然日内</td><td>回款周期变长</td><td>财务确认</td></tr>
          <tr><td>5.1 责任</td><td>甲方承担</td><td>双方各半</td><td>风险重新分配</td><td>法务确认</td></tr>
          <tr><td>7.4 终止</td><td>提前 30 天</td><td>提前 30 天（邮件）</td><td>通知方式变了</td><td>商务确认</td></tr>
        </tbody>
      </table>
      <p class="footnote">前三列是事实，后两列才是你真正的价值：影响谁、该怎么办。</p>`,
    notes: "这张表的精髓在后两列。只告诉他“这里改了字”，对方还是不知道要干什么；写清“影响谁、建议怎么办”，这张表才算能用。可以让学员想想自己工作里有哪些字段是“高风险字段”。"
  },

  {
    layout: "content",
    chapter: "第 7 章 · 别被字面骗了",
    title: "字数差不多，意思可能差很远",
    html: `
      <div class="kicker">第 7 章 · 别被字面骗了</div>
      <h2 class="title">字数差不多，意思可能差很远</h2>
      <div class="examples mt-20">
        <div class="example"><span class="before">三个工作日内</span><span class="arrow">→</span><span class="after">三日内</span><span class="verdict ok">意思基本没变</span></div>
        <div class="example"><span class="before">三个工作日</span><span class="arrow">→</span><span class="after">五个自然日</span><span class="verdict warn">责任往后拖了</span></div>
      </div>
      <div class="grid-2 mt-20">
        <p class="callout">高风险字段单独盯：<strong>金额、日期、责任主体</strong>。动了就拎出来。</p>
        <div class="prompt-card compact">
          <div class="prompt-head">比对提示词</div>
          <pre>对比 v1.md 和 v2.md，按章节对齐，输出五列表格。
标出所有语义变化，尤其是金额、日期、责任主体。
不确定的单独列出来，给我确认。</pre>
        </div>
      </div>`,
    notes: "字面 diff 会把“三个工作日”改成“三日内”标红，其实意思没变；而“三个工作日”改成“五个自然日”字数几乎一样，责任却变了。所以要教它看语义，而不是看字符。最后一句“不确定的单独列出来”，是给模型留一个说“我不知道”的口子。"
  },

  {
    layout: "content",
    chapter: "第 7 章 · 小结",
    title: "三句话记住第 7 章",
    html: `
      <div class="kicker">第 7 章 · 小结</div>
      <h2 class="title">三句话记住这一章</h2>
      <div class="summary-list mt-28">
        <div class="summary-row"><span class="s-num">01</span><p><strong>先对齐</strong>，再比对：确认同源、按标题对齐。</p></div>
        <div class="summary-row"><span class="s-num">02</span><p><strong>看语义</strong>，不只看字面：字数一样，意思可能差很远。</p></div>
        <div class="summary-row"><span class="s-num">03</span><p><strong>高风险字段</strong>（金额、日期、责任主体）必须人来定。</p></div>
      </div>`,
    notes: "比对这件事，模型能帮你发现“不一样”，但没资格替你判断“这个不一样算不算问题”。最后一句话可以送给所有做文档工作的人：机器找差异，人做判断。"
  },

  /* ============ 第 8 章 ============ */
  {
    layout: "chapter",
    chapter: "第 8 章 · 小结与练习",
    title: "第 8 章 小结与练习",
    html: `
      <div class="chapter-inner">
        <div class="chapter-num">08</div>
        <div>
          <div class="chapter-kicker">第 8 章</div>
          <h2 class="chapter-title">小结与练习</h2>
          <p class="chapter-sub">三句心法，两个练习。今晚就能用上。</p>
        </div>
      </div>`,
    notes: "最后一章不引入新概念，只做两件事：把三句心法再讲一遍，然后给两个今晚就能做的练习。"
  },

  {
    layout: "content",
    chapter: "第 8 章 · 三句心法",
    title: "以后用任何模型，都先想起这三句",
    html: `
      <div class="kicker">第 8 章 · 三句心法</div>
      <h2 class="title">以后用任何模型，都先想起这三句</h2>
      <div class="principle-list mt-24">
        <div class="principle-row"><span class="p-num">01</span><div><h3>给足上下文</h3><p>背景、示例、要求一次给全，别让它猜。</p></div></div>
        <div class="principle-row"><span class="p-num">02</span><div><h3>要证据</h3><p>每个结论都能指回原文；找不到，就让它说找不到。</p></div></div>
        <div class="principle-row"><span class="p-num">03</span><div><h3>控权限</h3><p>先只读，改动过你的眼，小步提交随时能退。</p></div></div>
      </div>
      <p class="footnote">顺序也别乱：先给料，再要证据，最后才放权。</p>`,
    notes: "这三句话其实是一套流程：先喂饱它，再要求它讲证据，最后才把改文件的权限交出去。顺序反了，就容易先被它改坏，再回头找原因。"
  },

  {
    layout: "content",
    chapter: "第 8 章 · 课后",
    title: "两个练习，今晚就能做",
    html: `
      <div class="kicker">第 8 章 · 课后</div>
      <h2 class="title">两个练习，今晚就能做</h2>
      <div class="grid-2 mt-24">
        <div class="exercise-card">
          <span class="ex-tag">练习一</span>
          <h3>补全一份自己的文档</h3>
          <p>找一份写了一半的说明或周报，只补一节。</p>
          <ul class="ticks">
            <li>风格和原文一致</li>
            <li>没有编造的命令或数据</li>
            <li>改动可以回退</li>
          </ul>
        </div>
        <div class="exercise-card">
          <span class="ex-tag">练习二</span>
          <h3>比对两份同源文档</h3>
          <p>合同、需求、周报都行，输出五列表。</p>
          <ul class="ticks">
            <li>高风险字段全覆盖</li>
            <li>每条差异能指回原文</li>
            <li>不确定项单独列出</li>
          </ul>
        </div>
      </div>`,
    notes: "练习不要贪大，一份周报、一份需求都行。做完用右边的验收标准自己检查一遍。如果卡住了，把提示词贴出来，通常问题都出在“约束”和“验收”没写清。"
  },

  {
    layout: "end",
    chapter: "结课",
    title: "结课：模型负责说，harness 负责做到",
    html: `
      <div class="end-inner">
        <div class="kicker light">结课</div>
        <h1 class="end-title">模型负责说，<br>harness 负责做到，<br>你负责判断。</h1>
        <div class="end-list">
          <span>猜词机器</span>
          <span>四件事补齐</span>
          <span>两个实战</span>
          <span>三句心法</span>
        </div>
        <p class="end-sub">下一步：挑一件你每周都要做的重复活儿，试着让 harness 替你跑一遍。跑顺了，就把它固化成 skill。</p>
      </div>`,
    notes: "最后留一个行动：找出你每周都要重复做的一件文档活儿，用今天学的方法跑一遍。跑通之后，把它写成 skill，下次一句话就能复用。课程到这里结束，剩下的是练习。"
  }

];
