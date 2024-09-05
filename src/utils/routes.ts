import {StackNavigationProp} from '@react-navigation/stack';
import BlogModel from '../models/blog';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Index: undefined;
  Show: BlogModel;
  Create: undefined;
  Edit: BlogModel;
};

export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, 'Index'>;

export type ShowScreenProps = NativeStackScreenProps<RootStackParamList, 'Show'>;

export type CreateScreenProps = NativeStackScreenProps<RootStackParamList, 'Create'>;

export type EditScreenProps = NativeStackScreenProps<RootStackParamList, 'Edit'>;
