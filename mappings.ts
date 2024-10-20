import { ReactionAdded } from "../generated/ReactionRegistry/ReactionRegistry";
import { Reaction, Reactant, Product, Reagent } from "../generated/schema";

export function handleReactionAdded(event: ReactionAdded): void {
  let reaction = new Reaction(event.params.reactionId.toHex());

  reaction.name = event.params.name;
  reaction.description = event.params.description;

  let reactants = event.params.reactants;
  for (let i = 0; i < reactants.length; i++) {
    let reactant = new Reactant(event.transaction.hash.toHex() + "-" + i.toString());
    reactant.name = reactants[i].name;
    reactant.structure = reactants[i].structure;
    reactant.reaction = reaction.id;
    reactant.save();
  }

  let products = event.params.products;
  for (let i = 0; i < products.length; i++) {
    let product = new Product(event.transaction.hash.toHex() + "-" + i.toString());
    product.name = products[i].name;
    product.structure = products[i].structure;
    product.reaction = reaction.id;
    product.save();
  }

  let reagents = event.params.reagents;
  for (let i = 0; i < reagents.length; i++) {
    let reagent = new Reagent(event.transaction.hash.toHex() + "-" + i.toString());
    reagent.name = reagents[i].name;
    reagent.structure = reagents[i].structure;
    reagent.reaction = reaction.id;
    reagent.save();
  }

  reaction.metadataHash = event.params.metadata;
  reaction.save();
}