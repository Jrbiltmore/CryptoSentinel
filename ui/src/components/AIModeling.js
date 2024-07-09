import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AIModeling.css';

const AIModeling = () => {
    const [modelData, setModelData] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchModelData();
    }, []);

    const fetchModelData = async () => {
        try {
            const response = await axios.get('/datasets/ai_modeling_data/model_config.json');
            setModelData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching model data:', error);
            setLoading(false);
        }
    };

    const handleModelSelect = (model) => {
        setSelectedModel(model);
    };

    return (
        <div className="ai-modeling">
            <h1>AI Modeling</h1>
            {loading ? (
                <p>Loading model data...</p>
            ) : (
                <div className="model-list">
                    {modelData.map((model, index) => (
                        <div key={index} className="model-item" onClick={() => handleModelSelect(model)}>
                            <h2>{model.modelName}</h2>
                            <p>{model.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {selectedModel && (
                <div className="model-details">
                    <h2>Model Details: {selectedModel.modelName}</h2>
                    <p><strong>Version:</strong> {selectedModel.version}</p>
                    <p><strong>Description:</strong> {selectedModel.description}</p>
                    <h3>Training Data</h3>
                    <p><strong>Source:</strong> {selectedModel.trainingData.source}</p>
                    <h3>Model Architecture</h3>
                    <pre>{JSON.stringify(selectedModel.modelArchitecture, null, 2)}</pre>
                    <h3>Training Parameters</h3>
                    <pre>{JSON.stringify(selectedModel.trainingParameters, null, 2)}</pre>
                    <h3>Evaluation Metrics</h3>
                    <pre>{JSON.stringify(selectedModel.evaluation.metrics, null, 2)}</pre>
                    <h3>Deployment</h3>
                    <pre>{JSON.stringify(selectedModel.deployment, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AIModeling;
