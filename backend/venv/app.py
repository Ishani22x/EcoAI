from flask import Flask, request, jsonify
from music_generation import generate_music
from art_generation import generate_art
from urban_design import generate_design
import openai
from flask_cors import CORS
from diffusers import StableDiffusionPipeline
import torch


openai.api_key = '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'


app = Flask(__name__)
CORS(app)
@app.route('/generate_text', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data.get("prompt", "")

    # Request completion from OpenAI's ChatGPT
    response = openai.ChatCompletion.create(
        model="gpt-2",
        messages=[{"role": "user", "content": prompt}]
    )

    generated_text = response['choices'][0]['message']['content']
    return jsonify({"text": generated_text})

@app.route('/generate_music', methods=['POST'])
def generate_music_route():
    data = request.json
    melody = generate_music(data['environmental_data'])
    return jsonify({"melody_path": melody})

@app.route('/generate_image', methods=['POST'])
def generate_image():
    data = request.json
    prompt = data.get("prompt", "a beautiful forest")

    # Generate image based on the prompt
    image = pipe(prompt).images[0]
    image_path = "generated_image.png"
    image.save(image_path)

    return jsonify({"image_path": image_path})

@app.route('/generate_design', methods=['POST'])
def generate_design_route():
    data = request.json
    design_path = generate_design(data['urban_data'])
    return jsonify({"design_path": design_path})

if __name__ == "__main__":
    app.run(debug=True)
