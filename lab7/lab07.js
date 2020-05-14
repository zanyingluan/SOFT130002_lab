const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];


let mainContainer = document.getElementsByClassName("justify");

function f(work){

    //根据助教写在css里的代码分别设置元素，并使用className方法设置成css类选择器所对应的类名
    let item = document.createElement("div");
    item.className = "item";

    let item_tip = document.createElement("h4");
    item_tip.innerText = "Genre:" + work.tips;

    let item_author = document.createElement("div");
    item_author.className = "inner-box";


    //注意到author是h3，lifetime是h4
    let author_h3 = document.createElement("h3");
    author_h3.innerText = work.author;
    author_h3.style.display = "inline";

    let author_h4 = document.createElement("h4");
    author_h4.innerText = "lifetime:" + work.lifetime;
    author_h4.style.display = "inline";
    author_h4.style.marginLeft = "1em";//考虑美观，使这段文字距离左边的文字1个em单位


    let item_photos = document.createElement("div");
    item_photos.className = "inner-box";
    //为了方便，这里使用了innerHtml
    item_photos.innerHTML = '<h3>Popular Photos</h3>';

    //用for of循环放对应的photos
    for (let src of work.photos) {
        let photo = document.createElement("img");
        photo.className = "photo";
        photo.src = src;
        item_photos.appendChild(photo);
    }

    let button = document.createElement("button");
    button.innerText = "visit";

    //最后把所有的元素全部按照顺序放到生成树里即可
    item.appendChild(item_tip);
    item_author.appendChild(author_h3);
    item_author.appendChild(author_h4);
    item.appendChild(item_author);
    item.appendChild(item_photos);
    item.appendChild(button);

    mainContainer[0].appendChild(item);
}

//使用window.onload方法，将works中所有的work依次传入并执行即可
window.onload = function () {
    for (let work of works) {
        f(work);
    }
}

