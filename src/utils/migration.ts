import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getUnits } from '../data/lessons';
import { getMasteryData } from '../data/doctrinalMastery';

export const migrateDataToFirebase = async () => {
    try {
        console.log('Starting migration...');

        // 1. Migrate Lessons
        const englishUnits = getUnits('en');
        const mongolianUnits = getUnits('mn');

        await setDoc(doc(db, 'units', 'en'), { data: englishUnits });
        await setDoc(doc(db, 'units', 'mn'), { data: mongolianUnits });
        console.log('Lessons migrated successfully.');

        // 2. Migrate Doctrinal Mastery
        const englishMastery = getMasteryData('en');
        const mongolianMastery = getMasteryData('mn');

        await setDoc(doc(db, 'doctrinal_mastery', 'en'), { data: englishMastery });
        await setDoc(doc(db, 'doctrinal_mastery', 'mn'), { data: mongolianMastery });
        console.log('Doctrinal Mastery migrated successfully.');

        return { success: true };
    } catch (error) {
        console.error('Migration failed:', error);
        throw error;
    }
};
