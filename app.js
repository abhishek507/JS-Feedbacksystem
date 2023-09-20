
let feedbacks = []


function feedback(){

    let rating = document.getElementById('ratings').value;
    
    let text = document.getElementById('review').value;
    if(rating >=0 && rating<=5){
        let feedback = {
            ratings :rating,
            text :text,
        }
        feedbacks.push(feedback);
    }

    console.log(feedbacks);
    


}


function rating5(){
    
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = ''
    let filter5 = feedbacks.filter((x)=>{
        return x.ratings == 5;
    })
    console.log(filter5);

    

    filter5.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews');
        div.appendChild(review);
        review.appendChild(text);
    })



}


function rating4(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = '';
    let filter4 = feedbacks.filter((x)=>{
        return x.ratings == 4
    })
    console.log(filter4);

    
    

    filter4.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews')
        div.appendChild(review);
        review.appendChild(text);
    })


}








function rating3(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = ''
    let filter3 = feedbacks.filter((x)=>{
        return x.ratings == 3;
    })
    console.log(filter3);

    

    filter3.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews');
        div.appendChild(review);
        review.appendChild(text);
    })



}

function rating2(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = ''
    let filter2= feedbacks.filter((x)=>{
        return x.ratings == 2;
    })
    console.log(filter2);

    

    filter2.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews');
        div.appendChild(review);
        review.appendChild(text);
    })



}

function rating1(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = ''
    let filter1 = feedbacks.filter((x)=>{
        return x.ratings == 1;
    })
    console.log(filter1);

    

    filter1.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews');
        div.appendChild(review);
        review.appendChild(text);
    })



}

function rating0(){
    let div = document.getElementById('feedbackContainer');
    div.innerHTML = ''
    let filter0 = feedbacks.filter((x)=>{
        return x.ratings == 0;
    })
    console.log(filter0);

    

    filter0.map((x)=>{
        let review = document.createElement('div');
        let text = document.createElement('p');
        text.innerHTML = x.text;
        review.classList.add('reviews');
        div.appendChild(review);
        review.appendChild(text);
    })



}
