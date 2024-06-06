import 'dotenv/config';
import * as joi from 'joi';


interface EnvVars {
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URI: string;
    }

const envSchema = joi.object({
  PORT: joi.number().default(3000),
  NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
  MONGO_URI: joi.string().required(),
}).unknown(true);


const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Error de validación de la configuración del entorno: ${error.message}`);
}

const envVars: EnvVars = value;



export const envs = {
    PORT: envVars.PORT,
    NODE_ENV: envVars.NODE_ENV,
    MONGO_URI: envVars.MONGO_URI,
}
