const amqp = require('amqplib/callback_api')

 amqp.connect(`amqp://localhost`, (err, connection) => {
      if (err){
          throw err;
      }

      connection.createChannel( (err,channel) => {
          if (err){
              throw err;
          }
          let queueName ="Arjun"
          let message = "this is arjun patidar"
          channel.assertQueue(queueName,{
              durable:false
          })
           channel.sendToQueue(queueName,Buffer.from(message));
          setTimeout(()=>{
              connection.close();
          },1000)
      })
})
