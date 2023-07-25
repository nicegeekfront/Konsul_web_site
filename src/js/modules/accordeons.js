let accordeons = document.querySelectorAll('.faq__accordeons-header').forEach((el) => {
    el.addEventListener('click', () => {
      
      let content = el.nextElementSibling;
  
       if (content.style.maxHeight) {
          document.querySelectorAll('.faq__accordeons-body').forEach((el) => el.style.maxHeight = null)
      } else {
        document.querySelectorAll('.faq__accordeons-body').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
      }
  
    })
  })
  
  

export default accordeons;