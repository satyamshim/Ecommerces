import './category-item.styles.scss'

const CategoryItem = ({category}) => {
 const {image, title} = category;
  return(
	<div  className="category-container">
	<article> {image} </article>
	 <div className="category-body-container">
		<h2> {title} </h2>
		<p> Shop Now </p>
	   
	  
	  </div>
   </div>
  )
}

export default CategoryItem