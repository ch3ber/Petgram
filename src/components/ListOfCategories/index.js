import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoadin] = useState(false)

  useEffect(function () {
    setLoadin(true)
    window
      .fetch('https://petgram-server-ch3ber-ch3ber.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoadin(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 210
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? (
          <Item key='loading'>
            <Category />
          </Item>
          )
        : (
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} pathId={category.id} />
              </Item>
            ))
          )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
