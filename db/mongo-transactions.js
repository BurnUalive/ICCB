/**
 * Created by Shivam Mathur on 27-07-2016.
 */

var i;
var log;
var flag;
var collection;
var path = require('path');

var collection_name = 'transactions';

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
        else if (document && (doc['id_trans'] === document['id_trans']))
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
exports.updateDB = function(query,db,newDoc,callback){
    var collection = db.collection(collection_name);
    var onUpdate = function(err,doc){
            if(err){
                callback(err,null);
            }
            else if(doc){
                callback(doc);
            }
            else{
                callback(false,null);
            }
    };
    collection.update(query,newDoc,onUpdate);
};