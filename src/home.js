function loadImage() {
    const body = document.createElement('div');
    const image = document.createElement('img');
    image.src = "maadae_shop.jpg";

    body.setAttribute("id", "body");
    image.setAttribute("id", "shop");

    document.body.appendChild(body);
    body.appendChild(image);
}

function loadReview() {
    const text = document.createElement('div');
    const content = document.createElement('p')
    const name = document.createElement('p');
    const stars = document.createElement('p');

    text.setAttribute("id", "text");
    content.setAttribute("id", "content");
    name.setAttribute("id", "name");
    stars.setAttribute("id", "stars");

    content.innerText = ` "This is truly one of the best five meals I’ve ever had in my life. Went here on a date with my wife. We had the squid, charcoal, grilled fish, and shrimp salad - if we had bigger stomachs, we would’ve eaten there twice in a row. I’m not even joking. You must 100% eat at this restaurant. The people who eat here are stylish and interesting. I was doing my best to fit in;) the staff are super friendly and fast. Very thankful we found this amazing restaurant on the Michelin app. Thankfulness to their whole food supply chain including, the farmers and fishermen and to the fish we ate with respect." `;
    name.innerText = "- Justice Laub";
    stars.innerText = "★★★★★";


    document.body.appendChild(text);
    text.appendChild(content);
    text.appendChild(name);
    text.appendChild(stars);
}

export {loadImage, loadReview};