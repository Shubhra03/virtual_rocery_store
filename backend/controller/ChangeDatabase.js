const MongoClient = require('mongodb').MongoClient;

async function updateAllDocumentsWithNewField() {
  const uri = 'mongodb://0.0.0.0:27017';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('ecommerce');
    const collection = database.collection('products');

    // Update all documents in the collection to add a new field
    const updateResult = await collection.updateMany({}, { $set: { totalUsers: 0 } });

    console.log(`Matched ${updateResult.matchedCount} documents and modified ${updateResult.modifiedCount} documents`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

updateAllDocumentsWithNewField();
