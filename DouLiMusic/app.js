// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    musicArr:[
        {
            id: '1826189041',
            poster: 'https://p1.music.126.net/6EX0yj-r5GBLzSNU20rrmQ==/109951165791933542.jpg?param=130y130',
            name: '花,太阳,彩虹,你',
            author: 'Mai/法老',
            musicLrc: "[00:00.00] 作词 : 法老/肯迪仔\n[00:00.07] 作曲 : 法老/肯迪仔\n[00:00.15] 编曲 : Mai\n[00:00.22] 制作人 : Mai\n[00:00.30]\n[00:16.34]\n[00:17.03]法老:\n[00:18.06]这是我的新歌 专属你的音符\n[00:20.03]上海这么大 你能否听见我的叮嘱\n[00:22.42]你的早晨比我早 背影看的清楚\n[00:24.65]摇下车窗 baby你的眼泪好像珍珠\n[00:27.32]花 太阳 雨 和你\n[00:29.20]我对你的思念写进了 纸和笔\n[00:31.46]今夜你在我的梦里出现\n[00:33.32]黄色包装薯片\n[00:34.37]和你看电影一直到五点\n[00:36.05]Baby 气泡 伴着钢琴声 跳跃\n[00:38.73]好想抱你在 低音 凋谢\n[00:40.99]你的表情冷艳 月色皎洁\n[00:43.27]对你的爱 不随气温 冷却\n[00:45.42]Wow 真的不太困\n[00:47.91]看见你的脸 我就忘掉困\n[00:49.76]就让 酒精 渐渐地麻醉掉人\n[00:52.02]和你一起躺下聊着对方体温\n[00:54.12]\n[00:54.34]法老:\n[00:54.74]花 太阳 Rainbow you\n[00:57.01]彩虹怎么可能会 Beauty than you\n[00:59.32]我来驾着热气球 带你遨游\n[01:01.50]夕阳胶片里的 你 Super Cute\n[01:03.77]花 太阳 Rainbow you\n[01:06.08]星星害羞 雨点看我 Kissing you\n[01:08.36]我的可爱女友 怎么哭着要走？\n[01:10.43]和我牵手好不好？一起私奔月球\n[01:11.62]\n[01:11.86]肯迪仔:\n[01:12.41]看雨点嗒嗒嗒嘀\n[01:14.35]听风儿刮到哪去\n[01:16.71]像卫星环绕这地球\n[01:18.92]就像我找不到理由\n[01:21.05]看雨点嗒嗒嗒嘀\n[01:23.57]当回忆变换场景\n[01:25.68]才发现照片里的你\n[01:28.11]已经飞到我心里去\n[01:30.13]\n[01:30.56]法老:\n[01:31.03]花 太阳 rainbow you\n[01:33.46]时间太早不想走\n[01:35.68]花 太阳 rainbow you\n[01:38.10]凌晨三点好多酒\n[01:40.44]花 太阳 rainbow you\n[01:42.81]时间太早不想走\n[01:44.94]花 太阳 rainbow you\n[01:47.28]眼神迷乱如何走\n[01:48.94]\n[01:49.18]法老:\n[01:49.41]我想看清你的脸 点了一根火柴\n[01:51.50]除了你的可爱 脑中只剩空白\n[01:53.90]九点舞度 初遇 like Hollywood\n[01:56.44]可你那么酷 却爱抱着我哭\n[01:58.77]花 太阳 雨 和你\n[02:01.02]我对你的思念写进纸和笔\n[02:03.30]好想你在我的梦里出现\n[02:04.86]流言蜚语入眼\n[02:06.06]让我有些无法入眠 Baby\n[02:07.76]那么就将悲伤之日当成喜悦一天\n[02:10.10]你陪我走出低谷 一起听过窗外雨点\n[02:12.20]一起做饭海边 一起手机开启静音\n[02:14.47]千万不要放的太响 我来唱歌你听\n[02:16.99]摸着黑白琴键 一起小清新\n[02:19.08]你的眼睛 一闪一闪 就像小星星\n[02:21.28]酒精麻醉掉人\n[02:22.40]相拥关上房门 安静到整个房间只有心跳声音\n[02:25.59]\n[02:25.86]法老:\n[02:26.22]花 太阳 Rainbow you\n[02:28.34]彩虹怎么可能会 Beauty than you\n[02:30.59]我来驾着热气球 带你遨游\n[02:33.05]夕阳胶片里的 你 Super Cute\n[02:35.25]花 太阳 Rainbow you\n[02:37.55]星星害羞 雨点看我 Kissing you\n[02:39.78]我的可爱女友 怎么哭着要走？\n[02:41.79]和我牵手好不好？一起私奔月球\n[02:42.77]\n[02:43.12]肯迪仔:\n[02:43.63]看雨点嗒嗒嗒嘀\n[02:45.83]听风儿刮到哪去\n[02:48.04]像卫星环绕这地球\n[02:50.41]就像我找不到理由\n[02:52.54]看雨点嗒嗒嗒嘀\n[02:54.96]当回忆变换场景\n[02:57.14]才发现照片里的你\n[02:59.38]已经飞到我心里去\n[03:02.05]\n[03:02.33]法老:\n[03:02.74]花 太阳 rainbow you\n[03:04.87]时间太早不想走\n[03:07.09]花 太阳 rainbow you\n[03:09.54]凌晨三点好多酒\n[03:11.93]花 太阳 rainbow you\n[03:14.06]时间太早不想走\n[03:16.44]花 太阳 rainbow you\n[03:18.74]眼神迷乱如何走\n[03:19.43]\n[03:19.91]肯迪仔:\n[03:20.21]看雨点嗒嗒嗒嘀\n[03:22.37]听风儿刮到哪去\n[03:24.58]像卫星环绕这地球\n[03:26.96]就像我找不到理由\n[03:29.13]看雨点嗒嗒嗒嘀\n[03:31.52]当回忆变换场景\n[03:33.69]才发现照片里的你\n[03:36.22]已经飞到我心里去\n",
        },
        {
            id: '1805363607',
            poster: 'https://p2.music.126.net/v93DPVDFppbVPTW5JIPkwQ==/109951165549887783.jpg?param=130y130',
            name: 'Cat Cafe',
            author: 'Shoffy',
            musicLrc: "[00:00.00]Cat Cafe - Shoffy\n[00:00.21]Lyrics by：Alex Shofler\n[00:00.47]Don't wake me up if this is a dream\n[00:02.94]Cause now I got everything\n[00:05.43]You're my love you're my life\n[00:07.93]Forever\n[00:11.03]Late night movie in September\n[00:13.46]Leaves about to fall\n[00:15.91]Stay up talking politics\n[00:18.29]Dancing in the hall\n[00:20.70]Cat café on Saturday\n[00:23.24]Hot chocolate with whip\n[00:25.74]See you light up like a star\n[00:28.15]Nothing better than this\n[00:30.02]Don't wake me up if this is a dream\n[00:32.57]Cause now I got everything\n[00:35.07]You're my love you're my life\n[00:37.56]Forever\n[00:40.19]When the world knocks me down\n[00:42.48]And my head starts to pound\n[00:44.96]You patch me up and make it all\n[00:47.48]So much better\n[00:50.70]TikTok binge till the morning sun\n[00:52.77]And playing chess in bed\n[00:55.44]Long walks on the waterfront\n[00:57.69]Then off to break some bread\n[01:00.44]Road trip up to Jackson Hole\n[01:02.71]Ansel Adams view\n[01:05.33]Rolling down the Snake River\n[01:07.80]Laying next to you\n[01:09.54]Don't wake me up if this is a dream\n[01:12.16]Cause now I got everything\n[01:14.75]You're my love you're my life\n[01:17.20]Forever\n[01:19.76]When the world knocks me down\n[01:22.08]And my head starts to pound\n[01:24.53]You patch me up and make it all\n[01:27.01]So much better\n[01:30.62]You wore me in like your denim\n[01:35.55]And now we fit for good\n[01:40.54]Comfortable but the spark ain't gone\n[01:45.73]Oh it never could\n[01:49.43]Don't wake me up if this is a dream\n[01:51.72]Cause now I got everything\n[01:54.26]You're my love you're my life\n[01:57.11]Forever\n[01:59.23]When the world knocks me down\n[02:01.57]And my head starts to pound\n[02:04.06]You patch me up and make it all\n[02:06.58]So much better\n",
        },
        {
            id: '447926067',
            poster: 'https://p2.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg?param=130y130',
            name: '鼓楼',
            author: '赵雷',
            musicLrc: "[00:00.08]鼓楼 (The Drum Tower) - 赵雷\n[00:00.72]词：赵雷\n[00:00.85]曲：赵雷\n[00:00.98]编曲：赵雷/喜子\n[00:01.24]制作人：赵雷/喜子/姜北生\n[00:01.67]贝斯：张岭\n[00:01.83]鼓：贝贝\n[00:01.97]电琴：喜子\n[00:02.14]箱琴：赵雷\n[00:02.30]口琴：赵雷\n[00:02.47]MIDI：喜子\n[00:02.60]和声：赵雷/孙嫣然/唐宁\n[00:03.31]\n[00:26.02]我走在鼓楼下面 路在堵着\n[00:33.49]\n[00:34.03]雨后的阳光洒落 人们都出来了\n[00:41.19]\n[00:42.25]执着的迷惘的文艺青年很多\n[00:50.20]如果我无聊了就会来这里坐坐\n[00:57.52]\n[00:58.24]我是个沉默不语的\n[01:01.79]靠着墙壁晒太阳的过客\n[01:06.35]如果我有些倦意了\n[01:09.88]就让我在这里独自醒过\n[01:15.19]我站在鼓楼上面\n[01:18.33]\n[01:19.22]一切繁华与我无关\n[01:23.15]这是个拥挤的地方 而我却很平凡\n[01:30.69]\n[01:47.24]我走在鼓楼下面 淋湿的咖啡馆\n[01:55.48]睡不着的后海边 月亮还在抽着烟\n[02:02.88]\n[02:03.63]喝醉的亲吻着 快活的人不眠\n[02:11.75]唯有我倚着围栏 对过往说晚安\n[02:19.61]\n[02:52.32]我是个沉默不语的\n[02:55.73]靠着车窗想念你的乘客\n[03:00.29]当107 路再次经过\n[03:04.25]时间是带走青春的电车\n[03:09.00]我站在什刹海边一切甜蜜与我无关\n[03:17.04]这是个拥挤的地方 而我却很孤单\n[03:24.46]我在鼓楼 我在鼓楼\n[03:32.79]我在鼓楼 我在鼓楼\n[03:44.97]我在鼓楼 我在鼓楼\n",
        },
        {
            id: '1909668509',
            poster: 'https://p2.music.126.net/pSQryRj4D4QwBUhr3CSZkw==/109951166898285997.jpg?param=130y130',
            name: '围绕',
            author: 'ChinoBroz/叶琼琳',
            musicLrc: "[00:13.03]Sorry没能接起电话因为按了静音\n[00:16.14]也许忽略你的感受没能按时倾听\n[00:19.03]我们都忙碌在 混凝土的丛林感到厌倦\n[00:22.70]即便身在同个城市却忘记要见面\n[00:25.68]借口是道路太拥堵 工作太过辛苦\n[00:28.73]发自内心的表达却没人能够听的清楚\n[00:31.73]再次相见 发现岁月变迁\n[00:34.19]是兄弟的八块腹肌变成大腹便便\n[00:37.32]从当初的十几岁 到她婚姻的殿堂\n[00:40.54]即便她在流泪 但还是特别漂亮\n[00:43.95]见证他们交换无名指的钻戒\n[00:46.37]誓言都兑现\n[00:47.47]紧紧握住她的手\n[00:48.84]不管世界多么善变\n[00:50.58]享受此刻掌声和鲜花\n[00:53.31]曲折的路难免会出现偏差\n[00:56.47]别让他们用三言两语就把你概括\n[00:59.51]so find ur love不要再次错过\n[01:02.35]给你的爱 一直都在\n[01:05.46]围绕着你从没有离开\n[01:08.47]也不必倒带 保持期待\n[01:11.72]把日月星河装到心海\n[01:14.78]甩掉你的阴霾\n[01:16.43]像飘散的云彩\n[01:18.06]头顶上的乌云麻烦请走开\n[01:21.02]甩掉你的阴霾\n[01:22.57]像飘散的云彩\n[01:24.15]头顶上的乌云麻烦请走开\n[01:27.73]有的朋友忙碌银行\n[01:29.56]有的兄弟奔波市场\n[01:30.97]有的朋友兢兢业业\n[01:32.69]像天使插上翅膀\n[01:33.96]有的姑娘倾其所有\n[01:35.80]照顾你直到醒酒\n[01:37.34]在你醒后做好早点\n[01:38.67]把你的领带系在领口\n[01:40.61]每个人都奔波在\n[01:43.10]生活中扮演着\n[01:44.51]大力水手要多吃菠菜\n[01:46.20]十年的时间里\n[01:47.32]不停的生活着坚持要努把力\n[01:49.51]回头再看看那流逝的光阴\n[01:51.00]也变成了老友记\n[01:52.92]争吵中会带着眼泪\n[01:54.61]欢笑声做点缀\n[01:56.17]笑容吹散乌云像是冬天里的棉被\n[01:59.46]带给我的温暖\n[02:00.45]伴随我入睡\n[02:01.95]拥抱着庆祝中\n[02:03.05]Now we have better day\n[02:04.69]给你的爱 一直都在\n[02:07.80]围绕着你从没有离开\n[02:10.84]也不必倒带 保持期待\n[02:14.02]把日月星河装到心海\n[02:17.11]甩掉你的阴霾\n[02:18.71]像飘散的云彩\n[02:20.27]头顶上的乌云麻烦请走开\n[02:23.34]甩掉你的阴霾\n[02:24.95]像飘散的云彩\n[02:26.58]头顶上的乌云麻烦请走开\n[02:30.57]爱 在（all around us by the love）\n[02:33.70]围绕从没离开（围绕从没离开过）\n[02:36.82]给你的爱 在 星河充满心海（all around us, all around us）\n[02:42.29]给你的爱 在 围绕从没离开（爱 all arund us 围绕从没离开过）\n[02:49.04]给你的爱 在 星河装满星海（all around us, all around us）\n[02:54.73]给你的爱 一直都在\n[02:57.75]围绕着你从没离开\n[03:00.75]也不必倒带 保持期待\n[03:03.95]把日月星河装到心海\n[03:07.06]甩掉你的阴霾\n[03:08.64]像飘散的云彩\n[03:10.22]头顶上的乌云麻烦请走开\n[03:13.27]甩掉你的阴霾\n[03:14.88]像飘散的云彩\n[03:16.45]头顶上的乌云麻烦请走开\n",
        },
        {
            id: '1854105063',
            poster: 'https://p2.music.126.net/H9g5VjEOIZE_akV-JsH_6Q==/109951166095764702.jpg?param=130y130',
            name: '你永远是我的宝贝,宝贝',
            author: "康姆士COM'Z",
            musicLrc: "[00:00.00] 作词 : 李永驻\n[00:01.00] 作曲 : 李永驻\n[00:02.00] 编曲 : 康姆士COM'Z\n[00:22.44]真的吗？心情有好点了\n[00:26.63]等下个陌生人 点亮心里的灯\n[00:32.57]对与不对 难懂的罗生门\n[00:36.82]让它掉入照后镜里拼命向你追\n[00:42.57]你笑很美 别急着去枯萎\n[00:47.07]任何的痛苦都不会通通白白受罪\n[00:52.58]你永远是我的宝贝，宝贝\n[01:00.32]\n[01:02.32]嘿，嘘～累了就先睡\n[01:07.26]或许 我当你抱枕\n[01:12.26]一起 把夜当棉被\n[01:16.71]盖住是非 无论错对\n[01:20.46]\n[01:23.70]我要唱的多大声\n[01:26.21]你笑才能毫无防备\n[01:30.65]我不要你孤单面对\n[01:33.86]到现在没告诉谁\n[01:36.35]那一夜我其实没睡\n[01:40.85]我不要你又一个人\n[01:44.05]欸～～我说过我不要你孤单面对\n[01:54.04]欸～～我说过我不要你又一个人\n[02:04.80]\n[02:14.29]\n[02:22.52]我许了一万个愿望你觉得\n[02:26.46]最后到底几个会成真\n[02:31.16]几个摔地落空心好疼\n[02:34.16]\n[02:34.66]有些人就会笑你憨\n[02:36.66]其实他们比你惨啰\n[02:40.61]非得跟你比行头 谁更好没准\n[02:44.09]\n[02:44.35]浪子的故事很美，张力很疼\n[02:48.59]Oh no!假的，宝贝！\n[02:51.28]吹嘘的谁都会吹\n[02:54.04]\n[02:54.28]爱过地注定疼 有血有肉的人\n[02:59.71]跟着我唱一遍 把悲伤逼出黑夜\n[03:03.72]\n[03:04.46]我要唱的多大声\n[03:07.21]你笑才能毫无防备\n[03:11.91]我不要你孤单面对\n[03:14.67]到现在没告诉谁\n[03:17.41]那一夜我其实没睡\n[03:21.59]我不要你又一个人\n[03:24.85]欸～～我说过我不要你孤单面对\n[03:35.10]欸～～我说过我不要你又一个人\n[03:46.09]\n[03:49.13]你永远是我的宝贝 宝贝 宝贝\n[03:59.33]你永远是我的宝贝 宝贝 宝贝\n[04:10.28]你永远是我的宝贝 宝贝 宝贝\n[04:20.52]你永远是我的宝贝 宝贝 宝贝\n[04:32.03][04:28.80]\n[04:33.04]我要唱的多大声\n[04:35.48]你笑才能毫无防备\n[04:39.97]我不要你孤单面对\n[04:43.22]到现在没告诉谁\n[04:45.98]那一夜我其实没睡\n[04:50.23]我不要你又一个人\n[04:53.22]欸～～我说过我不要你孤单面对\n[05:03.48]欸～～我说过我不要你又一个人\n",
        },
        {
            id: '1331593956',
            poster: 'https://p1.music.126.net/zvvxxiwsiKJlXnK9KqBUXg==/109951163712465495.jpg?param=130y130',
            name: '大眠',
            author: '王心凌',
            musicLrc: "[00:00.00]大眠 - 王心凌 (Cyndi Wang)\n[00:03.92]词：施人诚\n[00:07.85]曲：张简君伟\n[00:11.78]编曲：游政豪\n[00:15.70]感谢他把我 当成傻子\n[00:22.42]每天都哄我 上当一次\n[00:29.50]清醒一辈子 也就那样子\n[00:36.51]不介意用爱 来醉生梦死\n[00:43.68]原来被催眠 真有意思\n[00:50.62]我乐于作个 敬业人质\n[00:57.57]没空再去对谁解释\n[01:01.10]是我自己把自己挟持\n[01:04.01]不关他的事\n[01:09.96]都快忘了怎样恋一个爱\n[01:12.42]我被虚度了的青春\n[01:14.52]也许还能活过来\n[01:17.08]说心疼我的更应该明白\n[01:19.41]我当然会沉醉个痛快\n[01:24.02]就让我陪他恋完这场爱\n[01:26.41]只求心花终于盛开\n[01:28.52]就没有别的期待\n[01:31.15]等梦完醒来 再去收拾残骸\n[01:54.17]原来被催眠 真有意思\n[02:01.12]我乐于作个 敬业人质\n[02:08.15]没空再去对谁解释\n[02:11.49]是我自己把自己挟持\n[02:14.33]不关他的事\n[02:20.60]都快忘了怎样恋一个爱\n[02:22.95]我被虚度了的青春\n[02:24.99]也许还能活过来\n[02:27.69]说心疼我的更应该明白\n[02:29.93]我当然会沉醉个痛快\n[02:34.54]就让我陪他恋完这场爱\n[02:36.97]只求心花终于盛开\n[02:39.07]就没有别的期待\n[02:41.61]等梦完醒来 再去收拾残骸\n[02:50.25]如果不失去理智\n[02:53.76]爱情要从何开始\n[02:56.47]傻傻的骗子\n[02:58.21]和骗人的傻子\n[03:00.35]才可能一生一世\n[03:06.23]都快忘了怎样恋一个爱\n[03:08.74]我被虚度了的青春\n[03:10.73]也许还能活过来\n[03:13.42]说心疼我的更应该明白\n[03:15.84]我当然会沉醉个痛快\n[03:20.55]就让我陪他恋完这场爱\n[03:22.86]只求心花终于盛开\n[03:24.88]就没有别的期待\n[03:27.52]等梦完醒来\n[03:29.30]再去收拾残骸\n",
        },
        {
            id: '1499345116',
            poster: 'https://p1.music.126.net/2YfxYXFb3S-4HPZcn5lJxg==/109951165509525799.jpg?param=130y130',
            name: '我不知道',
            author: '梁博',
            musicLrc: "[00:00.00]我不知道2020(《了不起的儿科医生》电视剧主题曲) - 梁博\n[00:00.24]词：梁博\n[00:00.27]曲：梁博\n[00:00.30]编曲：梁博\n[00:00.34]乐器演奏：梁博\n[00:00.40]童声合唱：土豆王国小乐队\n[00:00.51]合唱指导老师：刘郡格/裴育\n[00:00.65]星星和月亮一起闪耀\n[00:03.75]驱散了孤独和寂寥\n[00:07.18]洒向黑暗的每一秒\n[00:10.14]也会把你照耀\n[00:14.02]受伤的孩子不再哭闹\n[00:17.47]疲惫的人不再奔跑\n[00:20.80]又看到你开心地笑\n[00:23.80]仿佛什么\n[00:26.18]\n[00:59.62]我不知道为什么\n[01:01.87]在日夜煎熬\n[01:03.86]\n[01:06.68]为什么烦恼\n[01:08.94]\n[01:09.66]为什么安静不了\n[01:13.18]\n[01:13.94]也不知道为了什么而祈祷\n[01:17.78]\n[01:20.36]越是不想去思考\n[01:23.16]\n[01:23.76]越纠缠不休围绕\n[01:26.62]\n[01:27.84]一个人可以把幸福挂更高\n[01:31.84]\n[01:33.56]伴着短暂的骄傲\n[01:36.95]\n[01:37.48]伴着无边的喧嚣\n[01:40.91]\n[01:41.76]也可以把一颗心变得更好\n[01:45.83]\n[01:47.33]用你微笑的嘴角\n[01:50.68]\n[01:51.84]让哭声静悄悄\n[01:54.52]\n[01:55.29]星星和月亮一起闪耀\n[01:58.83]驱散了孤独和寂寥\n[02:02.23]洒向黑暗的每一秒\n[02:05.24]也会把你照耀\n[02:09.14]受伤的孩子不再哭闹\n[02:12.68]疲惫的人不再奔跑\n[02:16.13]又看到你开心地笑\n[02:19.11]仿佛什么 什么 都不知道\n[02:31.37]\n[02:44.05]冬天的雨冷得人们穿起了衣帽\n[02:48.26]\n[02:50.19]厚厚的衣服遮挡少之又少的微笑\n[02:57.53]\n[02:58.29]宝贝就在妈妈的怀里睡着\n[03:02.69]\n[03:03.98]夜晚里的风吹着\n[03:07.63]他梦见白天的歌谣\n[03:10.85]亲爱的请原谅\n[03:12.95]我没能够给你一个浪漫拥抱\n[03:16.58]\n[03:17.78]每次面对你的时候\n[03:21.70]我就没有了借口\n[03:24.85]\n[03:26.13]我知道你想要的那种依靠\n[03:30.48]\n[03:31.62]那是我给不了\n[03:33.93]\n[03:36.12]谁会是你的骄傲\n[03:38.72]\n[03:39.72]星星和月亮一起闪耀\n[03:43.17]驱散了孤独和寂寥\n[03:46.58]洒向黑暗的每一秒\n[03:49.59]也会把你照耀\n[03:53.53]受伤的孩子不再哭闹\n[03:57.05]疲惫的人不再奔跑\n[04:00.50]又看到你开心地笑\n[04:03.48]仿佛什么 什么\n[04:10.58]\n[04:12.72]都不知道\n[04:15.11]\n[04:46.40]有没有人能牵我的手\n[04:48.64]带我逃离这场雨\n[04:50.60]不要淋到最后\n[04:52.92]咿呦咿呦 夜空闪烁\n[04:56.10]咿呦咿呦 风儿吹过\n[04:59.62]咿呦咿呦 看见银河\n[05:03.15]等心愿都降落\n[05:06.54]咿呦咿呦 万千萤火\n[05:09.97]咿呦咿呦 漫漫飞过\n[05:13.44]咿呦咿呦 那真实的\n[05:17.04]会属于你和我\n[05:20.56]会属于你和我\n[05:23.97]星星和月亮一起闪耀\n[05:27.46]驱散了孤独和寂寥\n[05:30.96]洒向黑暗的每一秒\n[05:33.94]也会把你照耀\n[05:37.84]受伤的孩子不再哭闹\n[05:41.36]疲惫的人不再奔跑\n[05:44.82]又看到你开心地笑\n[05:47.85]仿佛什么 什么\n[05:54.85]\n[05:57.32]都不知道\n",
        }
    ],
  }
})
