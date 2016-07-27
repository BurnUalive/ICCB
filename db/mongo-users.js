

var i;
var log;
var flag;
var collection;
var path = require('path');

var collection_name = 'users';

exports.getCount = function (query,db, callback)
{
     collection = db.collection(collection_name);
            var onFetch = function (err, count)
            {
                //db.close();
                if (err)
                {
                    callback(err);
                }
                else
                {
                    callback(null, count);
                }
            };
            collection.count(query, onFetch);

};

exports.insert = function (doc, db,callback)
{
    collection = db.collection(collection_name);
            var onInsert = function (err, docs)
            {
               // db.close();
                if (err)
                {
                    callback(err, null);
                }
                else
                {
                    callback(null, docs);
                }
            };
            collection.insertOne(doc, {w: 1}, onInsert);
};

exports.fetch = function (doc,db, callback)
{
    collection = db.collection(collection_name);
            var onFetch = function (err, document)
            {
               // db.close();
                if (err)
                {
                    callback(err, null);
                }
                else if (document && (doc['_id'] === document['_id']))
                {
                    callback(null, document);
                }
                else
                {
                    callback(false, null);
                }
            };
            collection.findOne(doc, onFetch);

};
