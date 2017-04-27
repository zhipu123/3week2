/**
 * Created by pzhi on 27/04/2017.
 */
var data = {
    personnelInfo: {
        photo: "resources/p0.jpg",
        name: "Gerry Zhi",
        intro: "Thoughtworker, Developer,xxxxxxxxxxxxxxxxxxx",
        link: "www.keern.co",
    },
    visitors: [],
    recentActivites: [
        {type: "follow", class: "fa-plus", target: "Eddie", href: "#"},
        {type: "reply to", class: "fa-redo", target: "Alexander", href: "#"},
        {type: "reply to", class: "fa-refresh", target: "Eric Twitte", href: "#"},
        {type: "reply to", class: "fa-refresh", target: "Eric Twitte", href: "#"},
        {type: "favorited", class: "fa-star", target: "John Twitte", href: "#"},
    ],

    posts: [
        {
            author: "Gerry Zhi",
            site: "Thoughtworks.com",
            refreshLimit: 20,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            author: "Gerry Zhi",
            site: "Thoughtworks.com",
            refreshLimit: 20,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            author: "Gerry Zhi",
            site: "Thoughtworks.com",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            author: "Gerry Zhi",
            site: "Thoughtworks.com",
            refreshLimit: 20,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            author: "Renrui Liu",
            site: "Thoughtworks.com",
            videoSrc: [{
                source: "https://images.apple.com/media/us/iphone-7/2017/e1d65fb1_eb51_43ca_a7df_87df984a2655/tv-spots/raconteur/iphone7-raconteur-cc-us-20170217_1280x720h.mp4",
                type: "video/mp4"
            }]
        },

        {
            author: "Gerry Zhi",
            site: "Thoughtworks.com",
            refreshLimit: 20,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ],
    news: [
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
        {href: "#", title: "#Lorem ipsum dolor sit amet"},
    ],
    recommended: [
        {name: "Gerry Zhi", brief: "Developer,Thoughtworker", photo: "resources/p1.jpg",},
        {name: "Wei Jia", brief: "Developer,Thoughtworker", photo: "resources/p2.jpg",},
        {name: "Z.K. Wang", brief: "Developer,Thoughtworker", photo: "resources/p3.jpg",},
        {name: "Yuan LIU", brief: "Developer,Thoughtworker", photo: "resources/p4.jpg",},
        {name: "Lei Dong", brief: "Developer,Thoughtworker", photo: "resources/p5.jpg",}
    ],
    summary: {
        follower: 200,
        "post": 200,
        following: 200,
        "photos/audios": 200,
    },
};
for (var i = 0; i < 9; i++) {
    var personId = Math.floor(Math.random() * 10);
    data.visitors.push({photo: "resources/p" + personId + ".jpg", link: "#"});
}
var app = new Vue({
    el: '#app',
    data: data,
});
setInterval(function () {
    var item = data.recommended[Math.floor(Math.random() * 5)];
    data.personnelInfo.name = item.name,
        data.personnelInfo.photo = item.photo, 1000;
}, 1000);