import { Container, Header, Title, TopBar, Filters } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";


export default function Home() {
  return (
    <main className='min-h-screen bg-white rounded-3xl'>
      <Header />
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList title='Пиццы' categoryId={1} items={[
                {
                  id: 1,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 2,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 3,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 4,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
              ]} />
              <ProductsGroupList title='Комбо' categoryId={2} items={[
                {
                  id: 1,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 2,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 3,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
                {
                  id: 4,
                  name: 'Пицца с сыром',
                  price: 500,
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                  items: [{ price: 550}]
                },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
