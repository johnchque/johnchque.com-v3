---
layout: notes
title: September 2025
date: 2025-09-10
updated: 2025-09-16
category: Now
---
Ml is turning data into number and finding patterns in those patterns.
The code is focused on code.
ML is a subset of AI. DL is a subset of ML.
## Welcome
Traditional programming
- Inputs, ingredients
- Rules, how to cook
- Output, dish
ML algorithm
- Has input and desired outputs
- Figures out the rules
Why use ML instead of programming?
- For a complex problem, can you think of all the rules?
- You can use ML for everything as long as you can convert it into numbers.
- Google rule for ML
	- If you can build a simple rule-based sustem, do that, not ML.
What use DL for?
- Problems with a long list of rules
- Continually changing env, DL can adapt to new scenarios.
- If there is a large dataset. 
What is DL not good for?
- When you need explainability, DL are uninterpretable by a human.
- When the traditional approach is a better option.
- When errors are unacceptable, since outputs are not always predictable.
- When there is not much data.
ML vs DL
- ML
	- Typically ML have structured data. Tables and rows. XGBoost is a common algorithm. Rules are set in stone.
	- Structured, some simpler algorithm.
		- Random forest.
		- Gradient boost models.
		- Naive Bayes.
		- Nearest neighbor.
		- SVM
- DL
	- Typically better for unstructured data.
	- We can make this data to have some structure with tensors.
	- For unstructured, use a neural network of some kind.
		- Neural networks.
		- Fully connected neural networks.
		- CNN.
		- RNN.
		- Transformers.
- Depending in how you represent your data, you can use DL algorithms for both.
What are neural networks?
- RESOURCE: 3Blue1Brown
- Inputs are images, text or audio. Before it can be used in NN, we need to convert it to numbers.
- Numerical encoding.
- We pass the numbers through a NN.
- Output.
- We can encode each step or use existing ones. They all follow the same principle.
- The NN will learn a representation of some form. (Learning the patterns in the data, also known a features.). Also called weights.
- The NN has learned a representation that best represents the patterns on the data, and outputs those "Representation outputs".
- We can convert the outputs into human understandable outputs.
- Anatomy of NN
	- Input layer (where data goes).
	- Hidden layers (Deep in DL comes from habing many).
	- Output layer (learned representation of prediction probabilities).
- embedding, weights, feature representations or feature vectors.
- Each layer is a combination of linear and non-linear functions. If you ask you to draw anything with unlimited lines, what patterns can you draw. That is what a NN is doing.
Different types of learning paradigms
- Supervised learning
	- How to differentiate between cats and dogs,  with a dataset with photos of each.
- Unsupervised
	- You only have the data itself, no labels at all.
- Transfer learning
	- Is taking the patterns that we're learned and transfer them to another.
What can DL be used for.
- Recommendation
- Translation
	- Sequence to sequence (from text to text), seq2seq
- Speech recognition
	- Sequence to sequence (from audio to text) seq2seq
- Computer vision
	- Classification/Regression
- NLP, using NL text.
What is Pytorch
- A research DL framework.
- To write fast DL code in Python. 
- Allows to access pre-built DL models.
- Provides a stack for whole stack.
Why PyTorch?
- It helps running code in GPU.
What is a Tensor?
- Tensors are representation of numbers. Is data encoded.
What are we going to cover?
- Pytorch workflow
	- Get data ready (into tensors)
	- Build or pick a pretrained model
		- Pick a loss function & optimizer.
		- Build a training loop.
	- Fit the model to the data and make a prediction, how do we get the data through the neural network.
	- Evaluate the model, to see if it is predicting correctly.
	- Improve through experimentation.
	- Save and reload your trained model.
How should I approach this course?
- Code along.
- Explore and experiment. With the idea of a chef. Experiment.
- Visualize what you don't understand.
- Ask questions.
- Do the exercises.

meet.google.com/rsz-kqsd-ziz