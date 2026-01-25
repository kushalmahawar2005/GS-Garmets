import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEnquiry extends Document {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: Date;
}

const EnquirySchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: false },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Check if model exists to prevent overwrite error in dev hot reloading
const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);

export default Enquiry;
