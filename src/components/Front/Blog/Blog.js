import React, { useState, useEffect } from 'react';
import DataService  from '../../../Services/DataService';
import {Constants} from '../../../Entities/Constants';


function Blog() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [props, setItems] = useState([]); 
    useEffect(() => {
        DataService.GetGenericCall(setItems,setError,setIsLoaded,Constants.Section_Blog);
        console.log(props);
      }, []);
  

    return (
        <section id="blog" class="blog-mf sect-pt4 route">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-box text-center">
                            <h3 class="title-a">
                                Blog
                            </h3>
                            <p class="subtitle-a">
                                {props?.subTitle}
                            </p>
                            <div class="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div class="row">

                    {
                        props?.blogs?.map(blog=>{
                            return(
                                <div class="col-md-4">
                                <div class="card card-blog">
                                    <div class="card-img">
                                        <a href="blog-single.html"><img src={blog.image} alt="" class="img-fluid" /></a>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-category-box">
                                            <div class="card-category">
                                                <h6 class="category">{blog.tag}</h6>
                                            </div>
                                        </div>
                                        <h3 class="card-title"><a href="blog-single.html">{blog.title}</a></h3>
                                        <p class="card-description">
                                            {blog.brief}
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <div class="post-author">
                                            <a href="#">
                                                <img src="/static/media/testimonial-2.60e9d7da.jpg" alt="" class="avatar rounded-circle" />
                                                <span class="author">Morgan Freeman</span>
                                            </a>
                                        </div>
                                        <div class="post-date">
                                            <span class="bi bi-clock"></span> 10 min
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Blog;