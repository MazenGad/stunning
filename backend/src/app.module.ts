import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/website-ideas',
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('✅ Connected to MongoDB');
          });
          connection.on('error', (error) => {
            console.log('❌ MongoDB connection error:', error.message);
            console.log('💡 App will continue with fallback mode');
          });
          return connection;
        },
      }),
    }),
    IdeasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
