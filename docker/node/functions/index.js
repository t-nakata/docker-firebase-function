const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const REGION = 'asia-northeast1';
const db = admin.firestore();


exports.question = functions
    .region(REGION)
    .https.onRequest((req, res) => {
        try {
            var level = req.query['level'];
            var docLevel = 'low_level';
            switch (level) {
                case 'low': docLevel = 'low_level'; break;
                case 'middle': docLevel = 'middle_level'; break;
                case 'high': docLevel = 'high_level'; break;
                case 'expart': docLevel = 'expart_level'; break;
                
            }
            const docRef = db.collection('questions').doc(docLevel);

            docRef.get(doc =>{
                if (doc.exists) {
                    res.json({lv: docLevel, data: doc.data()});
                    return;
                } else {
                    res.json({status: error, message: "No such document!"});
                    return;
                }
            });
        } catch (err) {
            console.log(err);
            res.json({status: error, message: "error"});
        }
    });
