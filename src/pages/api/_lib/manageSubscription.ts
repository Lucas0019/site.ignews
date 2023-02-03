import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

// Salvando as informações da subscription no FaunaDB
export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false,
) {
  // Buscando o usuário no banco pelo ID {customerId}
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index("user_by_stripe_customer_id"),
          customerId
        )   
      )
    )
  )
  
  // Buscando a subscription no banco pelo ID {subscriptionId}
  // Salvando os dados da subscription no FaunaDB
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  }

  if (createAction) {
    await fauna.query(
      q.Create(
        q.Collection("subscriptions"),
        { data: subscriptionData }
      )
    )
  } else {
    // Atualizando os dados da subscription no FaunaDB
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index("subscription_by_id"),
              subscriptionId,
            )
          )
        ),
        { data: subscriptionData }
      )
    )
  }

  // console.info({ subscriptionId }, { customerId });
}