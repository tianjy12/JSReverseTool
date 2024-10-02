# 一. 工具概述

在渗透测试和攻防过程中，经常会遇到一些网站需要破解其JS加密算法后才能进行修改，一般是由手动破解后通过Python的Request库，发送修改后的数据包，效率低下。该工具提供了图形化的界面和类似于BurpSuite收发包的功能，便于对加密后的参数进行测试，使用者只需按照网站的加密方式和明文样式修改提供的JS模板，模板中提供了一些常见的浏览器环境，即可实现解密的功能

请注意：由于JS逆向的特殊性，这里的解密不是真的解密，而是用网站的明文模板进行替换，待使用者修改完参数后进行加密再放包的功能，因此工具的使用依赖于JS模板的正确配置，需要使用者具有基本JS调试的能力

# 二. 使用方法

1. 安装需要的Python库

```
pip install -r .\requirements.txt
```

2. 安装NodeJS并配置环境变量

3. 运行启动程序

```
python .\JSReverse.py
```

![image-20241002135920417](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002135920417.png)

4. 配置JS模板，JS模板的位置在script/JSTemplate/JSTemplate.js
   - 将JSTemplate.js文件复制到script目录下
   - 将加密所需的全部函数复制到工具函数的部分
   - 用加密参数的明文替换明文模板
   - 根据注释和实际需要，修改encrypt的加密逻辑和console.log的输出样式，最终输出符合原请求体格式的结果

![image-20241002140020630](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002140020630.png)

# 三. 使用示例

1. 将完整的请求包复制到左侧，并选择JS模板，请求体中有data和crc两个参数，data为需要逆向的参数

![image-20241002140951879](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002140951879.png)

2. JS模板展示，这是手动调试分析出的data参数的明文，作为明文模板

![image-20241002141208951](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002141208951.png)

3. 点击解密，此时就会用明文模板替换请求体，可以对一些参数进行修改

![image-20241002141345381](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002141345381.png)

4. 点击加密，就会用目标网站的加密方法对修改后的请求体进行加密

![image-20241002141535716](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002141535716.png)

5. 点击Send就会进行放包，由于该网站进行了data和crc的双重验证，修改后服务器就会解密失败，不是该工具的功能问题

![image-20241002141721091](D:\MyCode\安全开发\JSReverse\imgs\README\image-20241002141721091.png)

