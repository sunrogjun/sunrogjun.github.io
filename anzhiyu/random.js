var posts=["2023/05/27/Hexo博客搭建/","2023/11/24/Hexo博客迁移/","2023/11/25/CDN浅析及在butterfly的应用/","2025/01/21/RPC开发10_容错机制/","2024/01/09/Nosql复习/","2025/01/23/RPC开发11_启动机制和注解驱动/","2025/01/08/RPC开发1_简易框架/","2025/01/13/RPC开发4_序列化器与SPI机制/","2025/01/11/RPC开发3_接口Mock/","2025/01/15/RPC开发5_注册中心基本实现/","2025/01/10/RPC开发2_全局配置加载/","2025/01/18/RPC开发8_负载均衡/","2025/01/16/RPC开发6_注册中心优化/","2025/01/17/RPC开发7_自定义协议/","2025/01/20/RPC开发9_重试机制/","2024/03/17/网络安全课堂作业1 IPTABLES试用/","2023/12/28/数据科学导论复习/","2024/06/10/网络安全期末复习/","2024/12/24/网络攻防期末复习/","2023/11/30/计算机网络引言/","2023/12/04/计网介质访问控制子层/","2023/11/30/计网物理层（一）/","2023/12/03/计网数据链路层/","2023/12/01/计网物理层（二）/","2023/12/15/计网传输层/","2023/11/25/计网网络层-拥塞控制算法/","2023/12/05/计网网络层/","2023/12/06/软件工程概述/","2023/12/19/软件工程考试纲要/","2023/12/06/软件工程过程和生命周期建模/","2024/06/16/软件测试复习/","2024/04/23/项目实训个人周报2/","2024/04/14/项目实训个人周报1/","2024/05/19/项目实训个人周报4/","2024/05/06/项目实训个人周报3/","2024/05/26/项目实训个人周报5/","2024/06/03/项目实训个人周报6/","2024/06/11/项目实训个人周报7/","2024/06/20/项目实训个人周报8/","2024/06/24/项目实训个人周报合集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };