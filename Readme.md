Project Git: https://github.com/mcferry/Lolipop.git

First I tried using Expo as read everywhere that it is easier (faster) to get up and running!
but with advanced in project I faced a lot of problems with Expo-Go , Tunnel/LAN Port issues and debugging.
so created a new project and continued my work with "npx" and did not removed the old one so you can feel the entire process,
therefore there are two branches in repo:
Expo : main
npx : master

The project uses React-Native Navigation package for "Tab-Bar-View" and a customized "BottomTabNavigator" with three buttons : Home, Find, Profile Settings.
Carousel is an array of Carousel Items which is a simple card view implementation. The array index is the length of the hard coded dummy data which passes to infiniteScroll function for timed scroll (6000 ms) and loop at the fnal index.

\*the implementation has some glitches when it mixes with touch scrolling.

Top TagBar is an conceptual implementation of what I see in the pdf file.
