import mongoose from 'mongoose';
const { Schema } = mongoose;
const Song = new mongoose.Schema({
    name:{
        type:String
    },
    imageURL:{
        type:String,
        default:"https://spark.spit.ac.in/wp-content/uploads/2017/09/music.jpg"
    },
    songURL:{
        type:String
    },
    artist:{
        type:Array,
        default:[]
    },
    language:{
        type:String
    },
    artistId:[
		{
			type: Schema.Types.ObjectId,
			ref: "artists",
		},
    ],
    like:{
        type:Boolean,
        default:false
    },
    totalstream:{
        type:Number
    },
    totallikes:{
        type:Number
    }
});

export default mongoose.model("songs",Song);