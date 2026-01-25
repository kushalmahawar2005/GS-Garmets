import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnalytics extends Document {
    page: string;
    date: string; // YYYY-MM-DD
    views: number;
}

const AnalyticsSchema: Schema = new Schema({
    page: { type: String, required: true, default: 'home' }, // Can expand to multiple pages later
    date: { type: String, required: true }, // Store as "2024-01-25" for easy aggregation
    views: { type: Number, default: 0 },
});

const Analytics: Model<IAnalytics> = mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);

export default Analytics;
