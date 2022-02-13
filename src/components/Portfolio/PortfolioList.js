import React from 'react'

export default function PortFolioList({ portfolioList }) {
    return (
        <>
            {
                portfolioList.map((portfolio, index) =>
                    <div class="col-md-4">
                        <div class="work-box">
                            <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                <div class="work-img">
                                    <img src={portfolio.Image} alt="" class="img-fluid" />
                                </div>
                            </a>
                            <div class="work-content">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <h2 class="w-title">{portfolio.ProjectName}</h2>
                                        <div class="w-more">
                                            <span class="w-ctegory">{portfolio.Tag}</span> / <span class="w-date">{portfolio.Date}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="w-like">
                                            <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>

    )
}
