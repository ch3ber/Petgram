import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import DB from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        DB.categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
