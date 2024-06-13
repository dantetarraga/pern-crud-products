import { IoMdAdd } from 'react-icons/io'
import { defer, Link, useLoaderData } from 'react-router-dom'
import { getAllProducts } from '../services/products.ts'
import { Product } from '../types/product'

export const loaderProducts = async () => {
  const products = getAllProducts()
  return defer({ products })
}

export const Products = () => {
  const { products } = useLoaderData<Product[]>()
  console.log(products)

  return (
    <section className=''>
      <div className='flex justify-end'>
        <Link
          to='/products/new'
          className='rounded-lg py-3 px-4 bg-blue-700 text-white font-semibold flex gap-2 hover:bg-blue-600'
        >
          <IoMdAdd size={25} /> Add new product
        </Link>
      </div>

      <main className='mt-10'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Description</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Available</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border px-4 py-2'>Intro to CSS</td>
              <td className='border px-4 py-2'>Adam</td>
              <td className='border px-4 py-2'>858</td>
              <td className='border px-4 py-2'>Adam</td>
              <td className='border px-4 py-2'>Adam</td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  )
}
