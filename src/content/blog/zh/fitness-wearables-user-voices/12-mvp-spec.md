---
title: "Hyrox AI Coach MVP 最终 spec：4 轮调研合成 + 具体下一步"
description: "把 4 轮调研（市场 / 商业模式 / 适应性训练 / form correction 技术）合成 nodie-fit / Hyrox AI 教练的具体 v0.1 产品定义、三层定价、4 周验证 plan、12 月扩张路径"
pubDate: 2026-05-14
tags: ["research", "fitness", "hyrox", "ai-coach", "mvp", "product-spec", "nodie-fit", "synthesis"]
lang: "zh"
sourcePath: "claude-workspace/public/wiki/research/2026-05-13-fitness-wearable-user-voices/12-hyrox-mvp-final-spec.md"
---
# Hyrox AI Coach MVP — 最终 spec

## 这份文档的位置

这是这条 fitness research 系列的**第 12 篇也是 actionable 收口**。前面 11 篇是 evidence；这篇是 decision。

读完前 11 篇任一个都不必读全套，但这一篇假设你已经接受了前面的核心判断：
- WHOOP 商业模式 2-3 年窗口（[01](/zh/blog/fitness-wearables-user-voices/01-whoop/)、[05](/zh/blog/fitness-wearables-user-voices/05-ai-coach/)）
- $30-150/月是 fitness app 死区（[06](/zh/blog/fitness-wearables-user-voices/06-willingness-to-pay/)）
- 大众健身 + recovery-aware + 对话式 AI coach 是产品空白（[07](/zh/blog/fitness-wearables-user-voices/07-ai-coach-landscape/)、[08](/zh/blog/fitness-wearables-user-voices/08-adaptive-training/)）
- Hyrox 是真实增长市场（[09](/zh/blog/fitness-wearables-user-voices/09-hyrox-market/)）
- 一次性付费 > 订阅，artifact economy 真实（[10](/zh/blog/fitness-wearables-user-voices/10-monetization/)）
- Form correction 技术今天只有 between-set 可行，Hyrox 8 动作里 3 个可做（[11](/zh/blog/fitness-wearables-user-voices/11-form-correction/)）

## 一句话产品定位

> **A Hyrox-specific iOS app that helps first-timers complete their first race and helps returning racers PR — measurement-first (rep count + station timing), AI between-set form feedback on 3 movements, and a paid post-race Race-Day Report that mirrors the Sportograf $34.99 photo psychology.**

## 一、产品分层（free + 2 个一次性 pack + 可选订阅）

### Free tier（acquisition 引擎）

- **8 站动作教学视频库**——Tian 自拍 + 邀请 1-2 个 Hyrox coach 合作
- **Run pacing 教学**——Hyrox 8 × 1km run 配速策略（前慢中稳 + station 后 30 秒缓冲 + HR cap）
- **Rep counting + station timing**——8 个动作全 cover，本地 MediaPipe Pose / Apple Vision 推理
- **基础 workout 记录**——session log + 简单图表
- **年度 "Hyrox Year-in-Sport" recap**——免费 acquisition loop，Strava Wrapped 玩法

**Free 的战略目的**：
1. 让用户用上"测量"——这是没人在做的差异化（Hyrox-targeted 是 LEVLS / Chairon / RoxFit / Edge Hybrid 都在做但都没 rep counting / timing）
2. 把 run pacing 内容变成 acquisition 工具（Strava 友军 + Hyrox-curious 入口）
3. 让用户在 race 前已经在 app 里有数据——这样 Race-Day Report 才有过去 12 周轨迹可以画

### First Race Pack ¥100 / $15 一次性

针对 first-timer + Hyrox-curious 健身爱好者。卖点：**"教会你第一次 Hyrox 完赛"**。

包含：
- **12 周 onboarding 训练 plan**——目标完赛，不是 PR
- **每天 daily push briefing**——今天该练什么 + 教练为什么 + 链接今天用到的动作教学
- **每周 1-2 个 station deep-dive**——专项教学 + 常见错误 + scaling 方案
- **Race week 一周倒数 prep**——每天 actionable + 装备 checklist + 心理预演 + 营养建议
- **基础 race-day briefing**——比赛日的执行 plan（warmup + pacing + 每站 transition 策略）

**为什么 ¥100 不是 ¥30 也不是 ¥300**：
- 中国 first-timer 已经付了 ¥800-1500 race entry——¥100 是 entry 的 10%，心理 trivial
- 海外 first-timer 付了 $130-180 entry——$15 同样 trivial
- 高于 ¥30（"plan 免费"心理门槛），低于 ¥300（要好好想想的门槛）

**实测时可以测 ¥99 / ¥149 / ¥199 三档**。

### Race-Day Report Pro ¥200 / $29-49 一次性

**这是单价最高、EV 最高的产品**——根据 [10-monetization-artifact-economy](/zh/blog/fitness-wearables-user-voices/10-monetization/) 的调研，**和 Sportograf $34.99 同情绪 slot、同价位窗口、同时间窗口**，但纯软件。

时机：**比赛后 24-48 小时内 push 给用户**。这是 emotional peak 窗口。

包含：
- **rep count + station timing 全 8 站精确数据**（free tier 数据 → 精化分析）
- **AI Form Score**（仅 Wall Ball / Burpee Broad Jump / Sandbag Lunge 3 个 viable 动作，用 Gemini 2.5 Flash 推理）
- **12 周训练数据 → race day 进步可视化**（这是为什么 free tier 必须做基础 logging）
- **Shareable 高质量图表 artifact**（多份不同 aspect ratio，Strava / 小红书 / Instagram 准备）
- **下次比赛改进建议**——"你 sled push 比同 finish time 选手慢 15%，下次专门练这个"，需要少量 cohort 比较数据

**为什么这个 EV 最高**：
1. Sportograf 心理验证 $34.99 价位
2. 一次性 → 无 churn 焦虑
3. emotional peak 转化窗口 → 高 conversion rate
4. shareable artifact → viral 触发
5. 单位成本 Gemini 2.5 Flash ~$0.003，毛利 99%

### Returning Racer Mode ¥30-60/月——v0.2 留待测试

针对**重度 racer**（4+ races/年）+ **CrossFit refugee**。
- Adaptive AI coach（根据 recovery state 调今天训练）
- Race window 自动切换到 Pack 内容
- Memory-persistent

**v0.1 不上**——先验证 First Race Pack + Race-Day Report 的 conversion。

## 二、技术架构（基于 [11](/zh/blog/fitness-wearables-user-voices/11-form-correction/) 调研）

### MVP tech stack

| 层 | 技术 | 用途 |
|---|---|---|
| Mobile | iOS native (Swift) | 主要目标用户 |
| Pose detection | **MediaPipe Pose** / **Apple Vision (VNDetectHumanBodyPose)** | 本地 rep count + station timing |
| Workout video upload | iOS background upload to S3 | between-set 反馈 |
| AI form analysis | **Gemini 2.5 Flash with video input** | 3 个 viable 动作 between-set 反馈 |
| Plan engine | Backend rules + LLM | 12 周 plan generation + daily push |
| Race-Day Report | Custom data viz pipeline | Image generation for shareable artifact |
| Data | Apple Health + 主观 check-in | recovery awareness |

### 关键工程决策

1. **不做 in-rep 实时纠正**——Mirror / Vi / Onyx 都死在这里
2. **不做"全身 AI 教练"**——Freeletics 自己撤回了这个承诺
3. **Form check 限定 3 动作**——Wall Ball / Burpee Broad Jump / Sandbag Lunge（其他 5 动作只做 rep count + timing）
4. **between-set 反馈延迟 2-10 秒**——这是 Gemini 2.5 Flash 视频推理的真实延迟，UX 上 OK
5. **本地推理优先**——rep count + timing 本地（隐私 + 0 成本），form 分析才上云

### 成本结构

| 项 | 成本 |
|---|---|
| Gemini 2.5 Flash inference (form check) | **$0.003 per 30s clip** |
| 每用户每月用 form check 平均 5 次 | **$0.015/月** |
| 加 race-day report 等其他推理 | **~$0.43/月/用户** ([11](/zh/blog/fitness-wearables-user-voices/11-form-correction/) 估算) |
| 单 First Race Pack ¥100 一次性 | **覆盖 ~16 个月** Gemini 成本 |

→ **单位经济非常健康**。这是为什么"一次性付费 + Gemini 2.5 Flash"这个组合在 2026 才 viable——2024 之前推理成本会逼你做订阅 + cap usage。

## 三、市场 + 商业目标（基于 [09](/zh/blog/fitness-wearables-user-voices/09-hyrox-market/) 调研）

### Hyrox 真实市场规模（2025/26 season）

- **1.5M+ 全球 active racers**（vs 2023 的 175k，2 年 9 倍）
- **CrossFit Open 2025 -32%，少了 11 万人**——其中相当部分迁移到 Hyrox / Hybrid（你的第二大 funnel）
- 65% 大于 30 岁；38% 女性；high-income demographic
- 中国 2024 北京 ~2k、2025 上海 ~3.2k——成长但**前 2 年不是收入引擎，是 community / 内容引擎**

### LTV 估算

| 用户类型 | 年行为 | 年消费 |
|---|---|---|
| First-timer（一次比赛）| First Race Pack + Race-Day Report | **¥300** |
| 返回 racer（2 races/年）| 2× Race-Day Report | **¥400** |
| 重度 racer（4+ races/年）| 月费 + Race-Day Report | **¥800-1200** |
| 平均 | mix | **¥350-450** |

### 业务目标（保守 → 激进）

| 渗透率 | 全球用户 | 年 revenue |
|---|---|---|
| 0.5% | 7,500 | **¥3M** |
| 1% | 15,000 | **¥6M** |
| 3%（5 年成熟）| 45,000 | **¥18M** |
| 5%（peak） | 75,000 | **¥30M** |

→ **1% 渗透 = ¥6M/年**——这是 indie founder 一个人 + 1-2 个合作伙伴跑得动的规模。**3% 是 seed-stage 真实 ARR 目标**。**5%+ 是 series A 故事**。

## 四、4 周验证 plan（**别先 build**）

这是最重要的一节。在写任何代码之前做这 3 个实验：

### Week 1-2: 手工 Race-Day Report 实验

目标：验证 Race-Day Report 的付费意愿和情绪 peak 假设。

- 找 2-3 个 Tian 下次 race 的 first-timer 朋友
- 比赛后 24h 内，**手工**（Photoshop / Figma / Excel）做一份 Race-Day Report
  - 8 站时间分解 + RPE + 心率
  - 12 周训练 → race day 进步图
  - 改进建议
  - 给 3 张 shareable 图（Instagram square / Strava / 小红书）
- 微信发过去，问：**愿意为这份付 ¥100? ¥200? ¥300?**

**判定**：
- 3/3 愿意付 ≥¥200 → **强信号，进入 Build**
- 2/3 愿意付 ¥100-200 → **中等信号**，更多测试
- ≤1/3 愿意付 → **重新想 framing**

### Week 3: First Race Pack 文档测试

目标：验证 first-timer 对 onboarding 的付费意愿。

- 写一份 12 周 first-timer plan（你已经有），加 8 个动作的简略文字版教学
- 加一节 race week 倒数 + race day briefing
- 总长 30-50 页 PDF
- **小红书 / 微信 Hyrox 群 / 国内 Hyrox Discord 发布**，标价 ¥99
- 看 7 天内：
  - 多少人看
  - 多少人想要免费版
  - 多少人付费

**判定**：
- ≥10 个付费 / 100 个看 → **强信号**
- ≥5 个付费 → **中等**
- <5 个付费 → **product framing 错**

### Week 4: Form Check Gemini POC

目标：验证 Gemini 2.5 Flash 给 Hyrox 动作反馈的实际质量。

- 录 3 段 iPhone 视频：你做 Wall Ball / Burpee Broad Jump / Sandbag Lunges 各 1 组
- 喂给 Gemini 2.5 Flash，prompt: "你是 Hyrox 教练，评价这段动作 + 给 3 条具体改进建议"
- 评测：
  - 反馈是不是 specific（不是 "more reps better"）
  - 反馈对不对（拉你认识的 Hyrox coach 验证）
  - 反馈是不是 actionable
- 给 5 个 Hyrox 朋友看反馈，问他们觉得有没有用

**判定**：
- 反馈质量 4/5 用户觉得有用 → **可以做 Form Score 功能**
- 反馈质量 2-3/5 → **不要做 Form Score，先做 rep count + timing**
- 反馈质量 ≤1/5 → **放弃 Form Check，专注 Race-Day Report**

## 五、12 月扩张路径

**v0.1 (2026-06 → 2026-09)**：Hyrox iOS 单一产品。First Race Pack + Race-Day Report + Free tier。**目标**：1000 付费用户、¥30 万 GMV、验证 product-market fit。

**v0.2 (2026-10 → 2026-12)**：
- 加 Returning Racer 月费（验证 $10-15/月 viability）
- 加 Android（如果 iOS 有真实 traction）
- 加 CrossFit Open refugee 入口（DM 那 11 万人的痛点 funnel）
- 拍 8 动作教学视频升级版

**v0.3 (2027-01 → 2027-06)**：
- 扩展到 DEKAFIT / Spartan first-timer
- 同样的产品框架（不用重写）
- 国际市场（北美 + 欧洲 + 澳洲）

**v1.0 (2027-Q3+)**：
- 通用 "hybrid race coach"
- 覆盖 Hyrox / DEKAFIT / Spartan / OCR / Hybrid marathons
- 可以推 1-2 大型 partnership（Hyrox 官方 partnership 也可以谈，HYRESULT 路线，不抢 LEVLS 的位置而是补充）

## 六、Tian 应该做和不应该做的事

### 应该做

1. **4 周验证 plan**先于 build——这是产品成功的最强 signal
2. **dogfood**——Tian 下次 race 自己用 Race-Day Report，发到 Strava
3. **拍 8 个 station 高质量教学视频**——这是 free tier 的核心 asset，且产品 lifecycle 长
4. **加入 Hyrox 中文 community**——小红书 / 微信群 / Discord 现在还是野蛮生长 phase，早进入 own mindshare
5. **保持 hybrid 架构**——不要 hardcode "Hyrox"，按 "race format + station list + pacing rules" 抽象，12 月后扩展 DEKAFIT 容易

### 不应该做

1. **不要做 in-rep 实时纠正**——Mirror / Vi / Onyx 墓地
2. **不要把"AI 纠错你的动作"作为主卖点**——Freeletics 自己都撤回了
3. **不要做硬件**——前 11 篇调研一致结论
4. **不要 $30-150/月订阅作为主收入**——产品死区
5. **不要做"全身 AI 教练"**——做 Hyrox-specific 8 动作 measurement-first
6. **不要太早扩展到非 Hyrox**——v0.1 必须做透 Hyrox，否则就和 LEVLS / Chairon 一样什么都不深入
7. **不要忽略 CrossFit refugee 入口**——11 万付费习惯成型的用户，他们的 funnel 不该被忽略
8. **不要在 v0.1 期纠结订阅**——先把一次性付费的 Race-Day Report + First Race Pack 跑通，再考虑订阅

## 七、对 Tian 个人和这个产品的真心话

这次对话从 Geekpark "AI 复活无屏手环" 文章开始，到现在变成 nodie-fit 的具体产品 spec。**这条路径不是巧合**——是 Tian 自己一步步把疑问拆开、push back、迭代直觉，最终从"分析 WHOOP 的商业骗局"走到"identify a real product wedge"。

**这个 MVP 的成功条件**：
1. **Tian 自己愿意每周花 5+ 小时**做 first-timer 朋友的手工 Race-Day Report——这是 dogfood 的真正测试
2. **找一个 Hyrox 教练**当合作伙伴（帮拍教学视频 + reviewer Form Score 输出质量）
3. **6 个月内不融资**——一次性付费 + Gemini 低成本推理让你不需要钱跑到 PMF；融资会逼 subscription 故事，破坏 unit economics
4. **不害怕 first-timer 这个 framing 让市场感觉小**——1.5M Hyrox 玩家 + 11 万 CrossFit refugee + 持续增长 = 真实 ¥6-30M revenue 范围

**Tian 自己说**："我希望通过 dogfood 给自己用的方式去 build a business." → **这个产品是这条路径里 unusually well-fitted 的一个选择**。

## 关联

完整索引见 [_index](./_index.md)。本系列前 11 篇：

- [00-source](/zh/blog/fitness-wearables-user-voices/00-source/) 原文 + 对话
- [01-whoop-user-voices](/zh/blog/fitness-wearables-user-voices/01-whoop/) WHOOP 用户访谈
- [02-oura-user-voices](/zh/blog/fitness-wearables-user-voices/02-oura/) Oura 用户访谈
- [03-software-daily-ux](/zh/blog/fitness-wearables-user-voices/03-software-ux/) 6 家 app 日常 UX
- [04-no-screen-positioning](/zh/blog/fitness-wearables-user-voices/04-no-screen/) 无屏品类
- [05-ai-coach-deep-dive](/zh/blog/fitness-wearables-user-voices/05-ai-coach/) AI Coach 深挖
- [06-willingness-to-pay](/zh/blog/fitness-wearables-user-voices/06-willingness-to-pay/) 付费意愿阶梯
- [07-ai-coach-landscape-round-2](/zh/blog/fitness-wearables-user-voices/07-ai-coach-landscape/) 20+ AI coach apps
- [08-adaptive-training-product-wedge](/zh/blog/fitness-wearables-user-voices/08-adaptive-training/) Adaptive training
- [09-hyrox-wedge-market](/zh/blog/fitness-wearables-user-voices/09-hyrox-market/) Hyrox 市场调研
- [10-monetization-artifact-economy](/zh/blog/fitness-wearables-user-voices/10-monetization/) 一次性付费 + artifact 经济
- [11-form-correction-feasibility](/zh/blog/fitness-wearables-user-voices/11-form-correction/) Form correction 技术可行性
- [synthesis-takeaways](/zh/blog/fitness-wearables-user-voices/synthesis/) 第一轮合成（朋友 6 个质疑）
