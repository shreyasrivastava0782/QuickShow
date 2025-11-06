// import { log } from 'console'
// import mongoose from 'mongoose'

// const connectDB = async()=>{
//     try{
//         mongoose.connection.on('connected',()=>console.log('Database connected'))
//         await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('✅ Database connected successfully!'));

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'quickshow', // ✅ Set database name here
    });

  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
