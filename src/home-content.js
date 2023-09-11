export default (function() {

    //Create container
    const contentWrapper = document.createElement('div');

    //Give elements necessary classes
    contentWrapper.classList.add('content-wrapper');
    
    //Return content
    return {contentWrapper};
})();