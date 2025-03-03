# JAVA后台开发

这篇的作者本人是2024届复旦计算机硕士毕业生，从事的是JAVA后端开发方向。去年拿到了腾讯、蚂蚁、快手、字节、美团、京东、得物、小红书的Offer（滴滴、百度、淘天因为投递的有点晚，要么错过笔试，要么后面不想再面了），腾讯、蚂蚁和快手是SSP，其他的也基本全是SP。
具体可以参考这位学长的[牛客网](https://www.nowcoder.com/users/98411722)，还有许多的面经可以参考。

由于我在九月份的时候想试试国企管培生，所以实际上互联网秋招也就从八月下到九月下就结束了，并且不少时间花在了国企的行测上准备，事实上准备互联网的时间不是很充足。之所以能够拿到这么多offer，运气好是一方面，另一方面也是之前在面暑期实习的时候准备得比较充分。个人认为最需要准备的有三个方面：八股文+项目+算法。JAVA岗位的hc很多，但相应的竞争的人也是非常多，近年来面试的难度也是在不断提升，所以一定要做好充足的准备。

目前八股文有关Java的部分比较建议是在JavaGuide上进行学习，关于计算机基础的部分很推荐小林coding上学习，写得很详细。

## Java基础

重点复习Java的核心概念，如面向对象编程、集合框架、多线程、IO流等，需要确保对这些知识点有扎实的理解。最好能够结合源码来进行学习，比如HashMap的put方法具体实现流程？具体来说可以包含以下几个方面：Java语言基础、集合框架、并发编程、IO、JVM调优、JDK关键版本间的差别等。学习Java基础的时候，最好能够结合一些真实的代码来辅助理解，单纯看原理的话不太能够理解而且不便于记忆。

## 数据库

数据库其实问的内容是比较常见的，但是可能会问的比较深，所以在学习的时候需要深入学习，然后重点学习常考的内容。具体来说主要包含以下几个方面：存储引擎、索引、undo/redo/bin log的作用、事务、锁和优化方法。其中事务是问的最多的部分，比如事务的隔离级别，以及如何实现的，这块儿很可能会问到底层的实现原理。具体来说，针对这些原理，不需要实际去实践，尝试结合现象进行理解就好了。此外，数据库相关的可能会提到sql代码题，这个时候就需要适当的刷一刷相关的算法题。

## 计算机基础

计算机基础相关知识点主要是问计算机网络+操作系统，其中计算机网络问的更多，因为是与业务开发密切相关的知识点。具体来说主要包含以下几个方面：网络模型、常见的网络协议、网络安全以及网络设备。其中常见的网络协议问的最多，而这其中又是以HTTP、TCP和IP问的最多。此外，也还会常问在网页上输入网站地址后到页面加载出来经历了哪些流程，这些流程又涉及了哪些协议，在这个流程中协议的作用是什么？操作系统虽然并不是很常问，但是一旦问到就会是那种比较不太常见的那种，很容易完全没印象。所以在学习操作系统相关八股文的时候，需要最好是多看几遍，并且看的范围要广一些。具体来说主要包含以下几个方面：进程和线程、内存管理、文件系统、I/O系统以及Shell相关的场景命令。这些一般来说不是很好记，所以最好是多多复习，然后多看看面经，学习面经中问到的问题要怎么回答，多多积累就好。

## 中间件

中间件近年来问的越来越详细，问的也越来越深入。根据功能将中间件分为消息中间件、应用服务器中间件和数据库中间件等不同种类。一般主要需要学习消息队列中间件：如RabbitMQ、Apache Kafka，用于实现异步通信和解耦。反向代理中间件：如Nginx，用于负载均衡和反向代理。缓存中间件：如Redis，用于缓存数据，提高系统性能。RPC中间件： 如Dubbo、gRPC，用于实现远程过程调用。这其中缓存中间件考察的比较多，尤其是以Redis为代表，需要重点复习。此外，需要知道同类型中间件的不同优劣势，进行横向对比，以便在后续可能会问到的场景题中进行合理选型。

## 框架

这里的框架指的是Spring和SpringBoot，尤其是Spring问的比较多。Spring主要会问的模块包括：控制反转（IoC）和依赖注入（DI），通过容器管理对象之间的依赖关系。切面编程（AOP）：实现横切关注点的模块化。数据访问支持：提供了对JDBC、ORM框架（如Hibernate）、NoSQL数据库的支持。事务管理：提供声明式事务管理的支持。MVC框架：提供了基于MVC的Web应用程序开发支持。SpringBoot问的一般主要是相较于Spring的优化提升，以及这两者间的区别。

## 场景题

这里的场景题主要是指的高可用以及高并发的相关场景设计，是比较综合的题目，主要设计一些中间件和架构思考，准备这类题目需要多多积累相关场景题。而且 这类场景题多数是与分布式相关的，包括分布式场景设计原则、分布式数据存储、分布式事务处理以及服务治理与负载均衡等方面都需要考虑到。
