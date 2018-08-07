" use strict";
$(() => {
for (let i = 1; i <= 10; i++) {
    $.get("https://www.reddit.com/r/aww/.json").then((data) => {
        $(".container").append(`<section class="article">
            <h3>${data.data.children[i].data.title}<a href="${data.data.children[i].data.url}"> (link)</a></h3>
            <img src="${data.data.children[i].data.thumbnail}">
        </section>`)
    });
}
});