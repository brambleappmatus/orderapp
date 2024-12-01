import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Product } from '@/types/product';

export async function POST(request: Request) {
  try {
    const { products } = await request.json();
    
    // Update the products.ts file
    const productsContent = `import { Product } from '@/types/product';

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

    const filePath = path.join(process.cwd(), 'data', 'products.ts');
    await fs.writeFile(filePath, productsContent, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating products:', error);
    return NextResponse.json({ success: false, error: 'Failed to update products' }, { status: 500 });
  }
}