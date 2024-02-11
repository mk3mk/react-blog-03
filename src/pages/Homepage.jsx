

const Homepage = () => {


  return (
      <div className="App">









      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
           <symbol id="check2" viewBox="0 0 16 16">
             <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
           </symbol>
           <symbol id="circle-half" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
           </symbol>
           <symbol id="moon-stars-fill" viewBox="0 0 16 16">
             <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
             <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
           </symbol>
           <symbol id="sun-fill" viewBox="0 0 16 16">
             <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
           </symbol>
         </svg>
     
         <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
           <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                   id="bd-theme"
                   type="button"
                   aria-expanded="false"
                   data-bs-toggle="dropdown"
                   aria-label="Toggle theme (auto)">
             <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
             <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
           </button>
           <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
             <li>
               <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                 <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
                 Light
                 <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
               </button>
             </li>
             <li>
               <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                 <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
                 Dark
                 <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
               </button>
             </li>
             <li>
               <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                 <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
                 Auto
                 <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
               </button>
             </li>
           </ul>
         </div>
     
         
     <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
       <symbol id="aperture" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="10"/>
         <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
       </symbol>
       <symbol id="cart" viewBox="0 0 16 16">
         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
       </symbol>
       <symbol id="chevron-right" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
       </symbol>
     </svg>
     
     <div className="container">
       <div className="border-bottom lh-1 py-3">
         <div className="row flex-nowrap justify-content-between align-items-center">
           <div className="col-4 pt-1">
             <a className="link-secondary" href="#">Subscribe</a>
           </div>
           <div className="col-4 text-center">
             <a className="blog-header-logo blog-div-logo text-body-emphasis text-decoration-none" href="#">Large</a>
           </div>
           <div className="col-4 d-flex justify-content-end align-items-center">
             <a className="link-secondary" href="#" aria-label="Search">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
             </a>
             <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
           </div>
         </div>
       </div>
     
       <div className="nav-scroller py-1 mb-3 border-bottom">
         <nav className="nav nav-underline justify-content-between">
           <a className="nav-item nav-link link-body-emphasis active" href="#">World</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Technology</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Design</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Culture</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Business</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Politics</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Science</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Health</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Style</a>
           <a className="nav-item nav-link link-body-emphasis" href="#">Travel</a>
         </nav>
       </div>
     </div>
     
     <div className="container">
       <div className="p-4 row p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
         <div className="col col-lg-6 px-0">
           <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
           <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
           <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
         </div>
         <div className="col col-lg-6 px-0">
           <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
         </div>
       </div>
     
       <div className="row mb-2">
         <div className="col-md-6">
           <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
             <div className="col p-4 d-flex flex-column position-static">
               <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
               <h3 className="mb-0">Featured post</h3>
               <div className="mb-1 text-body-secondary">Nov 12</div>
               <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
               <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                 Continue reading
     
               </a>
             </div>
             <div className="col-auto d-none d-lg-block">
               <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
             </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
             <div className="col p-4 d-flex flex-column position-static">
               <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
               <h3 className="mb-0">Post title</h3>
               <div className="mb-1 text-body-secondary">Nov 11</div>
               <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
               <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                 Continue reading
     
               </a>
             </div>
             <div className="col-auto d-none d-lg-block">
               <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
             </div>
           </div>
         </div>
       </div>
     
       <div className="row g-5">
         <div className="col-md-8">
           <h3 className="pb-4 mb-4 fst-italic border-bottom">
             From the Firehose
           </h3>
     
      
     
           <div className="blog-post">
             <h2 className="display-5 link-body-emphasis mb-1">Another blog post</h2>
             <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
     
             <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
             <blockquote>
               <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
             </blockquote>
             <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
             <h3>Example table</h3>
             <p>And don't forget about tables in these posts:</p>
             <table className="table">
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Upvotes</th>
                   <th>Downvotes</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Alice</td>
                   <td>10</td>
                   <td>11</td>
                 </tr>
                 <tr>
                   <td>Bob</td>
                   <td>4</td>
                   <td>3</td>
                 </tr>
                 <tr>
                   <td>Charlie</td>
                   <td>7</td>
                   <td>9</td>
                 </tr>
               </tbody>
               <tfoot>
                 <tr>
                   <td>Totals</td>
                   <td>21</td>
                   <td>23</td>
                 </tr>
               </tfoot>
             </table>
     
             <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
           </div>
     
           <div className="blog-post">
             <h2 className="display-5 link-body-emphasis mb-1">New feature</h2>
             <p className="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>
     
             <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
             <ul>
               <li>First list item</li>
               <li>Second list item with a longer description</li>
               <li>Third list item to close it out</li>
             </ul>
             <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
           </div>
     
           <nav className="blog-pagination" aria-label="Pagination">
             <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
             <a className="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
           </nav>
     
         </div>
     
         <div className="col-md-4">
           <div className="position-sticky">
             <div className="p-4 mb-3 bg-body-tertiary rounded">
               <h4 className="fst-italic">About</h4>
               <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
             </div>
     
             <div>
               <h4 className="fst-italic">Recent posts</h4>
               <ul className="list-unstyled">
                 <li>
                   <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                     <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                     <div className="col-lg-8">
                       <h6 className="mb-0">Example blog post title</h6>
                       <small className="text-body-secondary">January 15, 2023</small>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                     <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                     <div className="col-lg-8">
                       <h6 className="mb-0">This is another blog post title</h6>
                       <small className="text-body-secondary">January 14, 2023</small>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                     <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                     <div className="col-lg-8">
                       <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                       <small className="text-body-secondary">January 13, 2023</small>
                     </div>
                   </a>
                 </li>
               </ul>
             </div>
     
             <div className="p-4">
               <h4 className="fst-italic">Archives</h4>
               <ol className="list-unstyled mb-0">
                 <li><a href="#">March 2021</a></li>
                 <li><a href="#">February 2021</a></li>
                 <li><a href="#">January 2021</a></li>
                 <li><a href="#">December 2020</a></li>
                 <li><a href="#">November 2020</a></li>
                 <li><a href="#">October 2020</a></li>
                 <li><a href="#">September 2020</a></li>
                 <li><a href="#">August 2020</a></li>
                 <li><a href="#">July 2020</a></li>
                 <li><a href="#">June 2020</a></li>
                 <li><a href="#">May 2020</a></li>
                 <li><a href="#">April 2020</a></li>
               </ol>
             </div>
     
             <div className="p-4">
               <h4 className="fst-italic">Elsewhere</h4>
               <ol className="list-unstyled">
                 <li><a href="#">GitHub</a></li>
                 <li><a href="#">Twitter</a></li>
                 <li><a href="#">Facebook</a></li>
               </ol>
             </div>
           </div>
         </div>
       </div>
     
     </div>
     
     <div className="py-5 text-center text-body-secondary bg-body-tertiary">
       <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
       <p className="mb-0">
         <a href="#">Back to top</a>
       </p>
     </div>
     
     
     
     
     
     
     
     
     
     
     
     
         </div>
  )
}

export {Homepage}