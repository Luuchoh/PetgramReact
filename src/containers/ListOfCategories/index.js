import React, { useEffect, useState } from 'react'

import { Category } from '@components/Category'
import { ListOfCategoriesSkeleton } from '@components/Skeletons/ListOfCategorySkeleton'
import { Item, List } from '@containers/ListOfCategories/style'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3500/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = React.memo(() => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <ListOfCategoriesSkeleton />
          : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={category.id} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
})
