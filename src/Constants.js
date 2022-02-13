import heroBG from './assets/img/hero-bg.jpg'
import aboutImage from './assets/img/testimonial-2.jpg'
import counterBG from './assets/img/counters-bg.jpg'

import portfolio1 from './assets/img/work-1.jpg'
import portfolio2 from './assets/img/work-2.jpg'
import portfolio3 from './assets/img/work-3.jpg'
import portfolio4 from './assets/img/work-4.jpg'
import portfolio5 from './assets/img/work-5.jpg'
import portfolio6 from './assets/img/work-6.jpg'

import testimonialBG from './assets/img/overlay-bg.jpg';
import testimonial1 from './assets/img/testimonial-2.jpg';
import testimonial2 from './assets/img/testimonial-4.jpg';

import post1 from './assets/img/post-1.jpg';
import post2 from './assets/img/post-2.jpg';
import post3 from './assets/img/post-3.jpg';

export const AppConstants = {
    "HeroSection": {
        "Image": heroBG,
        "Text": "I am Morgan Freeman"
    },
    "About": {
        "Image": aboutImage,
        "Name": "Morgan Freeman",
        "Profile": "full stact developer",
        "Email": "contact@example.com",
        "Phone": "(617) 557-0089",
        "Skills": [
            { "Skill": "HTML", "Percentage": "85" },
            { "Skill": "CSS3", "Percentage": "73" },
            { "Skill": "PHP", "Percentage": "50" },
            { "Skill": "JAVASCRIPT", "Percentage": "90" },
        ],
        "AboutMe": [
            "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.",
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.",
            "Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        ]
    },
    "Services": {
        "Subtitle": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Services": [
            { "Icon": "bi bi-briefcase", "Title": "web design", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
            { "Icon": "bi bi-card-checklist", "Title": "web development", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
            { "Icon": "bi bi-bar-chart", "Title": "Photography", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
            { "Icon": "bi bi-binoculars", "Title": "Responsive design", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
            { "Icon": "bi bi-brightness-high", "Title": "Graphics design", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
            { "Icon": "bi bi-calendar4-week", "Title": "marketing services", "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." },
        ]
    },
    "Counter": {
        "BG": counterBG,
        "CounterList":[
            {"Icon":"bi bi-check","Value":"450","Text":"WORKS COMPLETED"},
            {"Icon":"bi bi-journal-richtext","Value":"25","Text":"YEARS OF EXPERIENCE"},
            {"Icon":"bi bi-people","Value":"550","Text":"TOTAL CLIENTS"},
            {"Icon":"bi bi-award","Value":"48","Text":"AWARD WON"},
        ]
    },
    "Portfolio":{
        "SubTitle":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "PortfolioList":[
            {"ProjectName":"Lorem impsum dolor","Image":portfolio1,"Tag":"Web Design","Date":"18 Sep. 2018"}
            ,{"ProjectName":"Loreda Cuno Nere","Image":portfolio2,"Tag":"Web Design","Date":"18 Sep. 2018"}
            ,{"ProjectName":"Mavrito Lana Dere","Image":portfolio3,"Tag":"Web Design","Date":"18 Sep. 2018"}
            ,{"ProjectName":"Bindo Laro Cado","Image":portfolio4,"Tag":"Web Design","Date":"18 Sep. 2018"}
            ,{"ProjectName":"Studio Lena Mado","Image":portfolio5,"Tag":"Web Design","Date":"18 Sep. 2018"}
            ,{"ProjectName":"Studio Big Bang","Image":portfolio6,"Tag":"Web Design","Date":"18 Sep. 2018"}
        ]
    },
    "Testimonial":{
        "BG":testimonialBG,
        "Items":[
            {"Image":testimonial1,"Name":"Xavi Alonso","Testimonial":" Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            ,{"Image":testimonial2,"Name":"Marta Socrate","Testimonial":" Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
        ]
    },
    "Blog":{
        "SubTitle":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Blogs":[
            {"Image":post1,"Tag":"Travel","Author":"Morgan Freeman","ReadTime":"10", "Title":"See more ideas about Travel","Brief":"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."}
            ,{"Image":post2,"Tag":"Travel","Author":"Morgan Freeman","ReadTime":"10", "Title":"See more ideas about Travel","Brief":"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."}
            ,{"Image":post3,"Tag":"Travel","Author":"Morgan Freeman","ReadTime":"10", "Title":"See more ideas about Travel","Brief":"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."}
        ]
    }
}