/*
  # Initial Schema Setup for Gatepass System

  1. Tables
    - users (managed by Supabase Auth)
    - gatepasses
      - id (uuid, primary key)
      - user_id (references auth.users)
      - purpose (text)
      - status (enum)
      - valid_from (timestamp)
      - valid_until (timestamp)
      - qr_code (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    - visitor_logs
      - id (uuid, primary key)
      - gatepass_id (references gatepasses)
      - entry_time (timestamp)
      - exit_time (timestamp)
      - security_notes (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for different user roles
*/

-- Create enum for gatepass status
CREATE TYPE gatepass_status AS ENUM ('pending', 'approved', 'rejected');

-- Create gatepasses table
CREATE TABLE IF NOT EXISTS gatepasses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  purpose text NOT NULL,
  status gatepass_status DEFAULT 'pending',
  valid_from timestamptz NOT NULL,
  valid_until timestamptz NOT NULL,
  qr_code text UNIQUE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create visitor_logs table
CREATE TABLE IF NOT EXISTS visitor_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gatepass_id uuid REFERENCES gatepasses NOT NULL,
  entry_time timestamptz,
  exit_time timestamptz,
  security_notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE gatepasses ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;

-- Policies for gatepasses
CREATE POLICY "Users can view their own passes"
  ON gatepasses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own passes"
  ON gatepasses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Security can view all passes"
  ON gatepasses
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.role = 'security'
    )
  );

CREATE POLICY "Admin can manage all passes"
  ON gatepasses
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.role = 'admin'
    )
  );

-- Policies for visitor_logs
CREATE POLICY "Security can manage visitor logs"
  ON visitor_logs
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.role IN ('security', 'admin')
    )
  );

CREATE POLICY "Users can view their own visitor logs"
  ON visitor_logs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM gatepasses
      WHERE gatepasses.id = visitor_logs.gatepass_id
      AND gatepasses.user_id = auth.uid()
    )
  );