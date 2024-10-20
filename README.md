# chimiadao-ethglobal-subgraph

Reaction Registry Subgraph

This repository contains the subgraph for the Reaction Registry smart contract deployed on the Polygon Amoy testnet. The subgraph indexes events emitted by the Reaction Registry smart contract, particularly the ReactionAdded event, and stores data related to chemical reactions, reactants, products, and reagents on The Graph.

Overview

The Reaction Registry allows users to add new reactions, specifying details such as reactants, products, reagents, and metadata. This subgraph captures and processes these details to create an indexable, queryable dataset using The Graph.

Contract Information

	•	Contract Address: 0xF8367eC2E3aa007BaC786A95dCEE623f0b0373C3
	•	Network: Polygon Amoy Testnet
	•	Event Indexed: ReactionAdded

Entities

This subgraph defines the following entities in schema.graphql:

	•	Reaction: Stores information about each reaction, including the reaction ID, name, description, and associated reactants, products, and reagents.
	•	Reactant: Represents the reactants used in a reaction, with a name and structure.
	•	Product: Represents the products generated from a reaction, with a name and structure.
	•	Reagent: Represents the reagents used in a reaction, with a name and structure.

Event Mapping

The subgraph processes the ReactionAdded event emitted by the smart contract. The mappings.ts file includes logic to handle the event and store the corresponding data in The Graph’s indexed entities.
