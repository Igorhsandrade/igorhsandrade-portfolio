import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (request.headers.get('x-revalidate-token') !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  ['/', '/projects', '/courses', '/certifications', '/about'].forEach((path) =>
    revalidatePath(path)
  );
  return NextResponse.json({ revalidated: true, timestamp: Date.now() });
}
