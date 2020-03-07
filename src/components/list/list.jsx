import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import useProducts from '../../storage/use-products';


const List = () => {
  const { getProducts, deleteProduct } = useProducts();

  const products = getProducts();
 

  return (
    <React.Fragment>
<Table>
     
     <thead>
       <tr>
       <th>Name</th>
       <th>EAN</th>
       <th>Type</th>
       <th>Weight</th>
       <th>Color</th>
       <th>Active</th>
       <th>Action</th>
       </tr>
      
     </thead>
  
   <tbody>
     {products.map(product => (
       <tr key={product.id}>
         <td>{product.name}</td>
         <td>{product.EAN}</td>
         <td>{product.type}</td>
         <td>{product.weight}</td>
         <td>{product.color}</td>
         <td>
           <input type='checkbox' name='active' />
         </td>
         <td>
           {' '}
           <Link
             className=' btn btn-secondary'
             to={`/products/${product.id}`}
           >
             VIEW
           </Link>{' '}
           <Link
             className='btn btn-primary'
             to={`/products/${product.id}/edit`}
           >
             EDIT
           </Link>{' '}
           <button onClick={deleteProduct} className='btn btn-danger'>DELETE</button>
         </td>
       </tr>
     ))}
   </tbody>
 </Table>
 <Link  to={`/products/create`}>Create new</Link>
    </React.Fragment>
    
  );
};
export default List;
