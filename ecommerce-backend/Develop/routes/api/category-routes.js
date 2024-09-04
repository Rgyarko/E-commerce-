const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({include:[Product]});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    }
  });
  
   // find all categories
  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });

    if (!catData) {
      res.status(404).json({ message: 'No category associated with this is!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find all categories
  // be sure to include its associated Products


router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
    });


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catData = await Category.update(
    {
    where: { id: req.params.id }
    });

    if (!catData) {
      res.status(404).json({ message: 'No category associated with this id!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catData = await Category.update(
    {
    where: { id: req.params.id }
    });

    if (!catData) {
      res.status(404).json({ message: 'No category associated with this id!' });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
