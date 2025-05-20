// Firestore
const COLLECTIONS = {
    USERS: 'users',
    INGREDIENTS_TREES: 'ingredientsTrees', // Need to remove
    USER_STATISTICS: 'userStatistics',
    ALLERGENS: 'allergens',
    INGREDIENTS: 'ingredients',
    DECLARATIONS: 'declarations',
    FILTERS: 'filters',
    IMPACT_MEASUREMENTS: 'impactMeasurements',
    IMPACT_MEASUREMENTS_STATISTICS: 'impactMeasurementsStatistics',
    SEARCH_ITEMS: 'searchItems',
    PRODUCTS: 'products',
    QUESTIONS: 'questions',
    CATEGORIES: 'categories',
    SHOPPING_LISTS: 'shoppingList',
    CONTACT_US: 'contactUs',
    LANGUAGES: 'languages',
    LABELS: 'labels',
    DIETARY_NEEDS: 'dietaryNeeds',
    INGREDIENTS_ANALYSIS_TAGS: 'ingredientsAnalysisTags',
    NOTIFICATIONS: 'notifications',
    RECEIVERS: 'receivers',
    VERSIONS: 'versions',
    DEVICE_STATISTICS: 'deviceStatistics',
    VERSIONS_AVAILABILITY: 'versionsAvailability',
    BRANDS: 'brands',
    COUNTRIES: 'countries',
    MANUFACTURING_PLACES: 'manufacturingPlaces',
    PRODUCERS: 'producers'
  }
  
  // RDB
  const PRODUCT_AMOUNT_RDB = 'statistic/productsAmount'
  const INGREDIENTS_TREE_RDB = 'ingredientsTree'
  
  export default COLLECTIONS
  export { PRODUCT_AMOUNT_RDB, INGREDIENTS_TREE_RDB }
  