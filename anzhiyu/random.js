var posts=["2023/11/25/CDN浅析及在butterfly的应用/","2023/05/27/Hexo博客搭建/","2023/11/24/Hexo博客迁移/","2023/12/28/数据科学导论复习/","2024/01/09/Nosql复习/","2024/06/10/网络安全期末复习/","2024/03/17/网络安全课堂作业1 IPTABLES试用/","2023/11/30/计算机网络引言/","2023/12/04/计网介质访问控制子层/","2023/12/15/计网传输层/","2023/12/03/计网数据链路层/","2023/11/30/计网物理层（一）/","2023/12/01/计网物理层（二）/","2023/11/25/计网网络层-拥塞控制算法/","2023/12/05/计网网络层/","2023/12/06/软件工程概述/","2023/12/06/软件工程过程和生命周期建模/","2023/12/19/软件工程考试纲要/","2024/04/14/项目实训个人周报1/","2024/04/23/项目实训个人周报2/","2024/05/06/项目实训个人周报3/","2024/05/19/项目实训个人周报4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };